import { ListarServicos } from '../Endpoints.js';
import { Headers } from '../constantes.js';

export function ListarServicos () {
  return axios.post(Servicos, data, Headers)
    .then(response => response.data)
    .catch(error => {
      console.log('ListarServicosService', error);
      throw(error);
    });
}