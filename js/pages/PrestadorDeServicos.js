import { TipoUsuario } from '../Constantes.js';
import { CadastrarPrestador } from '../Services/PrestadorService.js';
import { GetTodosMunicipios } from '../Services/MunicipiosService.js';
import { getURL } from '../functions.js'

const submit = (event) => {
  event.preventDefault();

  const usuario = document.getElementById('inputUsuario').value;
  const senha = document.getElementById('inputSenha').value;
  const nomeCompleto = document.getElementById('inputNomeCompleto').value;
  const endereco = document.getElementById('inputEndereco').value;
  const whatsapp = document.getElementById('inputWpp').value;
  const foto = document.getElementById('inputNomeCompleto').value;
  const biografia = document.getElementById('inputBiografia').value;
  
  const data = {
    userID: usuario,
    password: senha,
    nomeCompleto: nomeCompleto,
    endereco: endereco,
    telefone: whatsapp,
    linkFoto: foto,
    biografia: biografia,
    tipo: TipoUsuario.prestadorDeServicos
  };

  const divAviso = document.getElementById('aviso');
  
  CadastrarPrestador(data)
  .then(response => {
    if(response.result === "Succeeded") {
      divAviso.innerHTML = 
      `<div class="alert alert-success alert-dismissible fade show" role="alert">
        O cadastro foi realizado com sucesso!
      </div>`;
    } else {
      divAviso.innerHTML = 
      `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        Não foi possível realizar o cadastro!
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

GetTodosMunicipios().then((response) => {
  const nomesBairros = response.map((item) => item.nome);
  const optionsBairros = nomesBairros.map(nomeBairro => (`<option value="${nomeBairro}">${nomeBairro}</option>`)); 
  const optionsAux = [`<option value="${null}">Selecione uma opção</option>`].concat(optionsBairros);

  const selectElement = document.getElementById("inputArea");
  selectElement.innerHTML = optionsAux;
});