import { Contratante } from '../Endpoints.js';
import { Headers } from '../Constantes.js';

export function getContratante (email) {
  return axios.get(`${Contratante}?email=${email}`, Headers)
  .then(response => response.data[0])
  .catch(error => {
    console.log('ContratanteService', error);
    throw error;
  });
}