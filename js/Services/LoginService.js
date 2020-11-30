import { Login } from '../Endpoints.js';
import { Headers } from '../Constantes.js';
import { setTipoUsuario, setTokenUsuario, getTokenUsuario, existeTokenUsuario } from '../stores/UsuarioStore.js';

export function RealizarLogin(usuario, senha) {
    const data = {
        email: usuario,
        password: senha
    };    

    return axios.post(Login, data, {"content-type": Headers["content-type"]})
        .then(response => {
            if(response.data.authenticated) {
                setTokenUsuario(response.data.accessToken);
                setTipoUsuario(response.data.roles[0]);
            }
            return response.data;
        }).catch((error) => {
            console.log('LoginService', error);
            throw error;
        });
};

export function Deslogar() {
    sessionStorage.clear();
}

export function getTokenDecodificado () {
    const token = getTokenUsuario();    
    return JSON.parse(window.atob(token.split('.')[1]));
}

export function getToken () {
    return getTokenUsuario();    
}