import { HistoricoServicos } from '../Endpoints.js';
import { Headers } from '../Constantes.js';

export function listarHistoricoServicos() {
  return axios.get(HistoricoServicos, Headers)
    .then(response => response.data)
    .catch(error => {
      console.log('ListarOrdensService', error);
      throw(error);
    });
}