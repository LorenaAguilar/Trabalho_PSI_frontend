import {  EstaLogado, Deslogar } from '../Services/LoginService.js';
import { listarHistoricoServicos } from '../Services/ListarOrdensService.js';
import { getURL } from '../functions.js'

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

listarHistoricoServicos().then(response => {
  if(response.message !== 'Nenhum serviço prestado cadastrado') {
    inserirInformacoes(response);
  }
});

const inserirInformacoes = (informations) =>{  
  const listaServicos = document.getElementById('listaServicos');

  listaServicos.innerHTML = informations.map((information) =>(`
    <div id="containerServicoPrestado" class="row">
      <div id="campoImagem" class="col-2">
        <img src= ${information.prestadorFoto} />
      </div>
      <div id="informacoes"  class="col-10" >
        <strong id="informacoesPrestador"> 
          <p>
            Nome: ${information.prestadorNome}
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
          <p>
          Dia marcado: ${(new Date(information.data).toLocaleDateString())} 
          </p>
          <hr />
          <p>
            Biografia: ${information.biografia}
          </p>
         
        </strong>
       
        
      </div>
      <div id="container_buttons" >
     
      
    <button id="${information.ordemServico}" style="background-color: red;">
        Cancelar serviço
    </button>
      </div>
    </div>`)).join("");
}
