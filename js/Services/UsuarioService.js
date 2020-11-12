import { Usuario } from '../Endpoints.js';
import { Headers } from '../Constantes.js';

export function CadastrarUsuario (data) {
  return axios.post(Usuario, data, Headers)
    .then(response => response.data)
    .catch(error => {
      console.log('UsuarioService', error);
      throw error;
    });
}