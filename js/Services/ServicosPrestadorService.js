import { ServicosPrestados } from '../Endpoints.js';
import { Headers } from '../Constantes.js';

export function getTodosServicos (servico, prestador, unidade, preco) {
  return axios.get(ServicosPrestados, {servico, prestador, unidade, preco}, Headers)
    .then(response => response.data)
    .catch(error => {
      console.log('ServicosPrestadosService', error);
      throw(error);
    });
}