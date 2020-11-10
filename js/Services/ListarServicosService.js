import { Servicos } from '../Endpoints.js';
import { Headers } from '../constantes.js';

export function CadastrarServico () {
  return axios.post(Servicos, data, Headers)
    .then(response => response.data)
    .catch(error => {
      console.log('ServicosService', error);
      throw(error);
    });
}