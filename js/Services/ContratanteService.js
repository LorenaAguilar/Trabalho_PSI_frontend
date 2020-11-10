import { CadastroContratanteEPrestador } from '../Endpoints.js';
import { Headers } from '../Constantes.js';

export function CadastrarContrante (data) {          
  return axios.post(CadastroContratanteEPrestador, data, Headers)
    .then(response => response.data)
    .catch(error => { 
      console.log('ContranteService', error);
      throw error;
    });
}