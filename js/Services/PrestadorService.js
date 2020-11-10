import { CadastroContratanteEPrestador } from '../Endpoints.js';
import { Headers } from '../constantes.js';

export function CadastrarPrestador (data) {
  return axios.post(CadastroContratanteEPrestador, data, Headers)
    .then(response => response.data)
    .catch(error => {
      console.log('PrestadorService', error);
      throw error;
    });
}