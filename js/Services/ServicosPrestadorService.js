import { ServicosPrestados } from '../Endpoints.js';
import { Headers } from '../Constantes.js';

export function cadastrarServicoPrestado (servico, prestador, unidade, preco) {
  const data = {servico, prestador, unidade, preco: Number(preco)};
  console.log(Headers)
  return axios.post(ServicosPrestados, data, Headers)
    .then(response => response.data)
    .catch(error => {
      console.log('ServicosPrestadosService', error);
      throw(error);
    });
}