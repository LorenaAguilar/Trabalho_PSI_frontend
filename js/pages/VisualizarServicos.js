import { getTokenDecodificado, EstaLogado, Deslogar } from '../Services/LoginService.js';
import { GetTodosMunicipios } from '../Services/MunicipiosService.js'; 
import { getPrestador } from '../Services/PrestadorService.js';
import { getTodosServicos } from '../Services/ListarServicosService.js';
import { getURL } from '../functions.js'
import { setIdServicoPrestador } from '../stores/ServicoPrestadorStore.js';
import { getTipoUsuario} from '../stores/UsuarioStore.js';
import { rolesUsuario } from '../Constantes.js';
import { getContratante } from '../services/ContratanteService.js';
import { setIdUsuario } from '../stores/UsuarioStore.js';

if(EstaLogado()) {
  document.getElementById("botao_logout").onclick = () => {
    Deslogar();
    window.location.pathname = `${getURL()}/index.html`;
  }
} else {
  var node = document.getElementById("botao_logout");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

GetTodosMunicipios().then((response) => {
  const nomesBairros = response.map((item) => item.nome);
  const optionsBairros = nomesBairros.map(nomeBairro => (`<option value="${nomeBairro}">${nomeBairro}</option>`)); 
  const optionsAux = [`<option value="${null}">Selecione uma opção</option>`].concat(optionsBairros);
  
  const selectElement = document.getElementById("select_regiao");
  selectElement.innerHTML = optionsAux;
}).then(() => {
  getInformationLogin();
  getTodosServicos()
  .then(response => {
    if(response.message !== 'Nenhum serviço prestado cadastrado') {
      informations = response;
    }
  });
  
}).then(() => {
  document.getElementById('botaoFiltrar').onclick = (event) => { 
    event.preventDefault();
    inserirInformacoes();
  }

  setTimeout(() => {
  inserirInformacoes();
  var elements = document.querySelectorAll("button");
  elements.forEach((element) => {
      if(element.id !== 'botaoFiltrar' && element.id !== 'botao_historico_servicos') {
        element.onclick = (event) => {
        event.preventDefault();
        setIdServicoPrestador(element.id);
        window.location.pathname = `${getURL()}/src/contratar_serviços.html`;
      }
    }
  });
  }, 500)
});

const getInformationLogin = () => {
  if(EstaLogado()) {
    const divElement = document.getElementById('login-sucesso');
    
    const { unique_name } = getTokenDecodificado();
    
    divElement.innerHTML = `<strong class="card-title">Bem vindo(a), ${unique_name[0]}! </strong>`;

    if(getTipoUsuario() === rolesUsuario.Cliente) {
      getContratante(unique_name[0])
      .then((response) => {
        setIdUsuario(response.id);
        divElement.innerHTML = `<strong class="card-title">Bem vindo(a), ${response.nomeCompleto}! </strong>`;
      })
    }
    else if(getTipoUsuario() === rolesUsuario.Prestador) {
      getPrestador(unique_name[0])
      .then((response) => {
        setIdUsuario(response.id);
        divElement.innerHTML = `<strong class="card-title">Bem vindo(a), ${response.nomeCompleto}! </strong>`;
      })
    }

  } else {
    const divElement = document.getElementById('sem-login');

    divElement.innerHTML = `Faça seu login <a style="color: red;" href="../index.html">aqui</a> para contratar um de nossos serviços`;   
  }
}

let informations = [];


const inserirInformacoes = () =>{
  const filtros = {
    servico: document.getElementById('select_servico').value,
    regiao: document.getElementById('select_regiao').value
  }
  let informacoesFiltradas = informations;
  if(filtros.regiao !== 'null') {
    informacoesFiltradas = informations.filter((information) => information.cidade === filtros.regiao)
  }

  if(filtros.servico !== 'null') {
    informacoesFiltradas = informations.filter((information) => information.categoriaServico.capitalize() === filtros.servico)
  }

  const listaServicos = document.getElementById('listaServicos');

  listaServicos.innerHTML = informacoesFiltradas.map((information) =>(`
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
        <button ${getTipoUsuario() === rolesUsuario.Cliente ? '' : 'disabled=true'} id="${information.servicoprestado}">
        Contratar serviços
    </button>
    </div>
     
    </div>`)).join("");
}


var botaoCancelar = document.getElementById("botao_historico_servicos");

botaoCancelar.onclick = (event) => {
  event.preventDefault();
  if(getTipoUsuario()=== rolesUsuario.Prestador){
  window.location.pathname = `${getURL()}/src/historico_serviços_prestador.html`;
  } else {
    window.location.pathname = `${getURL()}/src/historico_serviços_contratante.html`;
  }
}