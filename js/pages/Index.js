import { RealizarLogin } from '../services/LoginService';
import { rolesUsuario } from '../Constantes';

const login = (event) => {
    event.preventDefault();

    const usuario = document.getElementById('inputUsuario').value;
    const senha = document.getElementById('inputSenha').value;

    RealizarLogin(usuario, senha)
    .then(response => {
        if(response.authenticated) {
            if(response.roles.find((role) => role === rolesUsuario.Prestador) !== null) {
                window.location.href = './src/visualizar_serviços.html';
            }
        }
    });
}

var botao = document.getElementById("botao_login");
botao.onclick = login;