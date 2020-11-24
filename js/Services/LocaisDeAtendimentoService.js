import { LocaisDeAtendimento } from '../Endpoints.js';
import { Headers } from '../Constantes.js';

export function cadastrarLocalDeAtendimento (cidade, estado, prestador) {
  return axios.post(LocaisDeAtendimento, {cidade, estado, prestador}, Headers)
    .then(response => response.data)
    .catch(error => {
      console.log('LocaisDeAtendimentoService', error);
      throw(error);
    });
}