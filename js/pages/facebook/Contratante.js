import { signInContranteFacebook } from '../../Services/facebook/CadastrarUsuario.js';
import { getURL } from '../../functions.js';
import { existeAuthTokenFacebook, getAuthTokenFacebook } from '../../stores/FacebookStore.js';

if(!existeAuthTokenFacebook()) {
  window.location.pathname = `${getURL()}/index.html`;
}

const submit = (event) => {
  event.preventDefault(); 

  const endereco = document.getElementById('inputEndereco').value;
  if(!endereco) {
    alert("Por favor, preencha o campo endereço");
    return;
  }

  const whatsapp = document.getElementById('inputWpp').value;
  if(!whatsapp) {
    alert("Por favor, preencha o campo whatsapp");
    return;
  }

  const divAviso = document.getElementById('aviso');
    
  signInContranteFacebook(getAuthTokenFacebook(), endereco, whatsapp, "Olá", '555-555-555-55')
  .then(response => {
    console.log(response);

    if(response.result === "Succeeded") {
      divAviso.innerHTML = 
        `<div class="alert alert-success alert-dismissible fade show" role="alert">
          O cadastro foi realizado com sucesso!
        </div>`;

        setTimeout(() => {
          window.location.pathname = `${getURL()}/src/visualizar_serviços.html`;
        }, 1000);
    } else {
      divAviso.innerHTML = 
        `<div class="alert alert-danger alert-dismissible fade show" role="alert">
          Usuário já foi cadastro ou a senha não é adequada!
        </div>`;
    }
  }).catch(() => { 
    divAviso.innerHTML = 
    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
      Não foi possível realizar o cadastro!
    </div>`;
  });
}

var botao = document.getElementById("botao_cadastrar");
botao.onclick = submit;

var botaoCancelar = document.getElementById("botao_cancelar");
botaoCancelar.onclick = (event) => {
  event.preventDefault();
  window.location.pathname = `${getURL()}/index.html`;
}