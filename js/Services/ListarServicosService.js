import { ListarServicos } from '../Endpoints.js';
import { Headers } from '../Constantes.js';

export function getTodosServicos () {
  return axios.get(ListarServicos, Headers)
    .then(response => response.data)
    .catch(error => {
      console.log('ListarServicosService', error);
      throw(error);
    });
}