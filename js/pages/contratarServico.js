import { existeIdServicoPrestador, getIdServicoPrestador, setIdServicoPrestador } from '../stores/ServicoPrestadorStore.js';
import { getURL } from '../functions.js'
import { getTodosServicos } from '../Services/ListarServicosService.js';

if(existeIdServicoPrestador()) {
    getTodosServicos().then((response) => {
      if(response.message !== 'Nenhum serviço prestado cadastrado') {
        getInformacoesServicoEscolhido(response);    
      }

    });
  } else {
  window.location.pathname = `${getURL()}/index.html`;
}

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}


function getInformacoesServicoEscolhido(informations) {
  const prestador = document.getElementById('listaServicos');

  informations.map((information) => {
    if(information.prestador === getIdServicoPrestador())
    prestador.innerHTML = (`
      <div id="containerServicoPrestado" class="row">
        <div id="campoImagem" class="col-2">
          <img src= ${information.foto} />
        </div>
        <div id="informacoes"  class="col-10" >
          <strong id="informacoesPrestador"> 
            <p>
              Nome: ${information.nomeCompleto}
            </p> 
            <p>
              Serviço: ${information.categoriaServico.capitalize()}
            </p>
            <p>
              Região que atende: ${information.cidade}
            </p>
            <p>
              Preço: R$ ${information.preco} (hora)
            </p>
            <hr />
            <p>
              Biografia: ${information.biografia}
            </p>
          </strong>
         
        </div>
        <div id="container_buttons">
        <button >
            Contratar serviços
        </button>
        </div>
      </div>`
    );
  });
}