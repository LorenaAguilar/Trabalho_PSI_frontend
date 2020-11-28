import { existeIdServicoPrestador, getIdServicoPrestador, removeIdServicoPrestador } from '../stores/ServicoPrestadorStore.js';
import { getURL } from '../functions.js'
import { getTodosServicos } from '../Services/ListarServicosService.js';
import { cadastrarOrdem } from '../Services/OrdemService.js'
import { getIdUsuario, getEmailUsuario } from '../stores/UsuarioStore.js';
import { getContratante } from '../Services/ContratanteService.js';

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

  const information = informations
  .filter((information) => information.servicoprestado === getIdServicoPrestador())[0];
  
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
      <button id="contratar">
          Contratar serviços
      </button>
      </div>
    </div>`
  );
  document.getElementById("contratar").onclick = (event) => {
    event.preventDefault();
    const data = document.getElementById("inputData").value;
    if(data) {
      getContratante(getEmailUsuario()).then((response) => {
        cadastrarOrdem(
          information.prestador, 
          getIdUsuario(), 
          information.servicoprestado,
          data, 
          information.preco, 
          response.endereco, 
          0)
        .then(() => {
          alert('Cadastro Realizado com sucesso');
          removeIdServicoPrestador();
          window.location.pathname = `${getURL()}/src/visualizar_serviços.html`;
        });
    });
    } else {
      alert('Por favor, insira um valor ao campo data.')
    }
  } 
}

