import { UnidadesDeCobranca } from '../Endpoints.js';
import { Headers } from '../Constantes.js';

export function getTodasUnidadesDeCobranca () {
  return axios.get(UnidadesDeCobranca, Headers)
    .then(response => response.data)
    .catch(error => {
      console.log('UnidadesDeCobrancaService', error);
      throw(error);
    });
}

export function encontrarUnidadesDeCobranca(unidade) {
    getTodasUnidadesDeCobranca.then((todasUnidadesDeCobranca) => {
        return todasUnidadesDeCobranca.find(todasUnidadesDeCobranca.unidade === unidade).id;
    });
};