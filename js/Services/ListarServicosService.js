import { ListarServicos } from '../Endpoints.js';
import { Headers } from '../Constantes.js';

export function ListarServicos () {
  return axios.get(Servicos, data, Headers)
    .then(response => response.data)
    .catch(error => {
      console.log('ListarServicosService', error);
      throw(error);
    });
}