import { Usuario } from '../Endpoints.js';
import { Headers } from '../Constantes.js';

export function CadastrarContrante (data) {          
  return axios.post(Usuario, data, Headers)
    .then(response => response.data)
    .catch(error => { 
      console.log('ContranteService', error);
      throw error;
    });
}