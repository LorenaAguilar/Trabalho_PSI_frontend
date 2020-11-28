import { Login } from '../Endpoints.js';
import { Headers } from '../Constantes.js';

export function RealizarLogin(usuario, senha) {
    const data = {
        email: usuario,
        password: senha
    };    

    return axios.post(Login, data, {"content-type": Headers["content-type"]})
        .then(response => {
            if(response.data.authenticated) {
                sessionStorage.setItem('tokenUser', response.data.accessToken);
            }
            return response.data;
        }).catch((error) => {
            console.log('LoginService', error);
            throw error;
        });
};

export function EstaLogado() {
    return sessionStorage.getItem('tokenUser') !== null;
} 

export function Deslogar() {
    sessionStorage.removeItem('tokenUser');
}

export function getTokenDecodificado () {
    const token = sessionStorage.getItem('tokenUser');    
    return JSON.parse(window.atob(token.split('.')[1]));
}

export function getToken () {
    return sessionStorage.getItem('tokenUser');    
}