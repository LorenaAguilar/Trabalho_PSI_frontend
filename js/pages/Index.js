import { RealizarLogin } from '../Services/LoginService.js';
import { rolesUsuario } from '../Constantes.js';
import { getURL } from '../functions.js';
import { setAuthTokenFacebook } from '../stores/facebook/FacebookStore.js';
 
function checkLoginState() {
    FB.getLoginStatus(function(response) {
        console.log('reposnse', response);
        statusChangeCallback(response);
        if(response.status === 'connected') {
            setAuthTokenFacebook(response.authResponse.accessToken);
            window.location.pathname = `${getURL()}/src/facebook/visualizar_serviços.html`;
        }
    });
}


const login = (event) => {
    event.preventDefault();

    const usuario = document.getElementById('inputUsuario').value;
    const senha = document.getElementById('inputSenha').value;

    RealizarLogin(usuario, senha)
    .then(response => {
        if(response.authenticated) {
            if(response.roles.find((role) => role === rolesUsuario.Cliente) !== null) {
                window.location.pathname = `${getURL()}/src/visualizar_serviços.html`;
            }
        }
    });
}

document.getElementById("botao_login").onclick = login;

document.getElementById("botao_visualizar").onclick = () => window.location.pathname = `${getURL()}/src/visualizar_serviços.html`