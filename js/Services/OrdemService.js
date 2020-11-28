import { Ordem } from '../Endpoints.js';
import { Headers } from '../Constantes.js';

export function cadastrarOrdem (prestador, contratante, servicoPrestado, dataServico, preco, endereco, status) {
  const data = {
    prestador, 
    contratante, 
    servicoPrestado, 
    data: new Date(dataServico).toISOString(), 
    preco: Number(preco), 
    endereco,
    resumo: 'resumo',
    formaPagamento: 0,
    status: Number(status)
  };
  
  return axios.post(Ordem, data, Headers)
    .then(response => response.data)
    .catch(error => {
      console.log('OrdemService', error);
      throw(error);
    });
}

export function atualizarOrdem (
  idservicoPrestado, 
  status) {
  const data = {
    status: Number(status)
  };
  
  return axios.put(`${Ordem}/${idservicoPrestado}`, data, Headers)
    .then(response => response.data)
    .catch(error => {
      console.log('OrdemService', error);
      throw(error);
    });
}

export function getOrdemById (id) {  
  return axios.get(`${Ordem}/${id}`, data, Headers)
    .then(response => response.data)
    .catch(error => {
      console.log('OrdemService', error);
      throw(error);
    });
}