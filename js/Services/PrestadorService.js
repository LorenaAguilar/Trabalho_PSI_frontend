import { Prestador } from '../Endpoints.js';
import { Headers } from '../Constantes.js';

export function getPrestador (email) {
    return axios.get(`${Prestador}?email=${email}`, Headers)
    .then(response => response.data[0])
    .catch(error => {
      console.log('PrestadorService', error);
      throw error;
    });
}