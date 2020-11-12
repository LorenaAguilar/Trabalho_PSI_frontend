import { Prestador } from '../Endpoints.js';
import { Headers } from '../Constantes.js';

export function getPrestador (data) {
  return axios.get(Prestador, data, Headers)
    .then(response => response.data)
    .catch(error => {
      console.log('PrestadorService', error);
      throw error;
    });
}