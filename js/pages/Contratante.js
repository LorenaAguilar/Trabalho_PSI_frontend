import { TipoUsuario } from '../Constantes.js';
import { CadastrarUsuario } from '../Services/UsuarioService.js';
import { getURL } from '../functions.js'

const submit = (event) => {
  event.preventDefault();

  const usuario = document.getElementById('inputUsuario').value;
  const nomeCompleto = document.getElementById('inputNomeCompleto').value;
  const senha = document.getElementById('inputSenha').value;
  const endereco = document.getElementById('inputEndereco').value;
  const whatsapp = document.getElementById('inputWpp').value;
  const foto = document.getElementById('inputFoto').value;
    
  const data = {
    email: usuario,
    password: senha,
    nomeCompleto: nomeCompleto,
    endereco: endereco,
    telefone: whatsapp,
    linkFoto: foto,
    biografia: `Olá, meu nome é ${nomeCompleto}`,
    tipo: TipoUsuario.contratante,
    cpf: '555-555-555-55'
  };

  const divAviso = document.getElementById('aviso');
    
  CadastrarUsuario(data)
  .then(response => {
    if(response.result === "Succeeded") {
      divAviso.innerHTML = 
        `<div class="alert alert-success alert-dismissible fade show" role="alert">
          O cadastro foi realizado com sucesso!
        </div>`;
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