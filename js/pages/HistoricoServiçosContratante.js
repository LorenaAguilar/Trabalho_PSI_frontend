import {  Deslogar } from '../Services/LoginService.js';
import { listarHistoricoServicos } from '../Services/ListarOrdensService.js';
import { getURL } from '../functions.js'
import { statusOrdem } from '../Constantes.js';
import { atualizarOrdem } from '../Services/OrdemService.js';
import { existeTokenUsuario } from '../stores/UsuarioStore.js';

if(existeTokenUsuario()) {
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
})
.catch(() => {
  const listaServicos = document.getElementById('listaServicos');
  listaServicos.innerHTML = `
        <div id="containerServicoPrestado" class="row">
          <div id="informacoes" class="col" style="display: flex; justify-content: center;" >
            <strong id="informacoesPrestador" style="align-text: center"> 
              <p>
                Você ainda não possui ordens de serviço!
              </p> 
          </div>
        </div>`;
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
          <p>
          Situação: ${statusOrdem[information.situacao]}
          </p>
          <hr />
          <p>
            Biografia: ${information.biografia}
          </p>
        </strong>
      </div>
      <div id="container_buttons" >
        ${statusOrdem[information.situacao] === "Cancelado" || statusOrdem[information.situacao] === "Finalizado" ? 
        '' : 
        `<button id="${information.ordemDeServico}" style="background-color: red;">
          Cancelar serviço
        </button>`}
      </div>
    </div>`)).join("");

  if(informations.length === 0) {
    listaServicos.innerHTML = `
      <div id="containerServicoPrestado" class="row">
        <div id="informacoes" class="col" style="display: flex; justify-content: center;" >
          <strong id="informacoesPrestador" style="align-text: center"> 
            <p>
              Você ainda não possui ordens de serviço!
            </p> 
        </div>
      </div>`;
  }


  var elements = document.querySelectorAll("button");
  elements.forEach((element) => {
    element.onclick = (event) => {
      event.preventDefault();
      atualizarOrdem(element.id, 3).then(() => {
        alert(`"A ordem foi atualizada para ${statusOrdem[3]}"`);
        window.location.reload();
      });
    }
  });
}
