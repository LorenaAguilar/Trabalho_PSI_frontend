import { TipoUsuario } from '../Constantes.js';
import { CadastrarUsuario } from '../Services/UsuarioService.js';
import { GetTodosMunicipios } from '../Services/MunicipiosService.js';
import { getURL } from '../functions.js'
import { getPrestador } from '../Services/PrestadorService.js';
import { encontrarIdServico } from '../Services/ServicosService.js';
import { Deslogar, getToken, RealizarLogin } from '../Services/LoginService.js';
import { cadastrarServicoPrestado } from '../Services/ServicosPrestadorService.js';
import { cadastrarLocalDeAtendimento } from '../Services/LocaisDeAtendimentoService.js';
import { encontrarUnidadesDeCobranca } from '../Services/UnidadesDeCobrancaService.js';

const submit = (event) => {
  event.preventDefault();

  const usuario = document.getElementById('inputUsuario').value;
  const senha = document.getElementById('inputSenha').value;
  const nomeCompleto = document.getElementById('inputNomeCompleto').value;
  const endereco = document.getElementById('inputEndereco').value;
  const whatsapp = document.getElementById('inputWpp').value;
  const foto = document.getElementById('inputNomeCompleto').value;
  const biografia = document.getElementById('inputBiografia').value;
  
  const inputPreco = document.getElementById('inputPreco').value;
  const inputServico = document.getElementById('inputServico').value;

  const inputArea = document.getElementById('inputArea').value;

  const data = {
    email: usuario,
    password: senha,
    nomeCompleto: nomeCompleto,
    endereco: endereco,
    telefone: whatsapp,
    linkFoto: foto,
    biografia: biografia,
    tipo: TipoUsuario.prestadorDeServicos,
    cpf: '555-555-555-55'
  };

  const divAviso = document.getElementById('aviso');
  Deslogar();

  CadastrarUsuario(data).then(() => {
    Deslogar();
    setTimeout(() => {
      RealizarLogin(data.email, data.password).then(() => {
        setTimeout(() => {

          let idServico, idPrestador;
          encontrarIdServico(inputServico).then(response => {
          idServico = response;

          getPrestador(data.email).then((response) => {
            idPrestador = response[0].id;

            cadastrarLocalDeAtendimento(inputArea, 'Minas Gerais', idPrestador).then(() => {
              encontrarUnidadesDeCobranca('Hora').then((idUnidadeCobranca) => {
                setTimeout(() => {
                  cadastrarServicoPrestado(idServico, idPrestador, idUnidadeCobranca, inputPreco).then(() => {
                    console.info('deu tudo certo')
                  })
                }, 2000);
              });
            })
          });
          }, 2000);
        });       
      }).catch(() => {
        console.info('deu errado');
      });
    }, 500);
  })
  .catch(() => {
    console.info('deu erro no cadastro')
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