import { existeIdServicoPrestador, getIdServicoPrestador, setIdServicoPrestador } from '../stores/ServicoPrestadorStore.js';
import { getURL } from '../functions.js'
import { getTodosServicos } from '../Services/ListarServicosService.js';


let informations = [{
  id: getIdServicoPrestador(),
  nome: "Leonardo Da Vinci",
  servico: "Pintor",
  regiao: "Sarzedo",
  preco: "100",
  biografia: "Ótimo pintor, especialista em desenhos e pinturas artísticas.",
  imagem: "https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2019/06/24/leo.jpg"
}];

if(existeIdServicoPrestador()) {
    getTodosServicos().then((response) => {
      if(response.message !== 'Nenhum serviço prestado cadastrado') {
          informations = response;    
      }

    });
    getInformacoesServicoEscolhido();
  } else {
  window.location.pathname = `${getURL()}/index.html`;
}

function getInformacoesServicoEscolhido() {
  const prestador = document.getElementById('listaServicos');

  informations.filter((information) => {
    if(information.id ===  getIdServicoPrestador())
    prestador.innerHTML = (`
      <div id="containerServicoPrestado" class="row">
        <div id="campoImagem" class="col-2">
          <img src= ${information.imagem} />
        </div>
        <div id="informacoes"  class="col-10" >
          <strong id="informacoesPrestador"> 
            <p>
              Nome: ${information.nome}
            </p> 
            <p>
              Serviço: ${information.servico}
            </p>
            <p>
              Região que atende: ${information.regiao}
            </p>
            <p>
              Preço: R$ ${information.preco} (hora)
            </p>
            <hr />
            <p>
              Biografia: ${information.biografia}
            </p>
          </strong>
          <button >
              Contratar serviços
          </button>
        </div>
      </div>`
    );
  });
}