import { Ordem } from '../Endpoints.js';
import { Headers } from '../Constantes.js';

export function cadastrarOrdem (prestador, contratante, servicoPrestado, dataServico, preco, endereco, resumo, formaPagamento, status) {
  const data = {
    prestador, 
    contratante, 
    servicoPrestado, 
    data: new Date(dataServico), 
    preco: Number(preco), 
    endereco,
    resumo,
    formaPagamento: Number(formaPagamento),
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
  prestador, 
  contratante, 
  servicoPrestado, 
  dataServico, 
  preco, 
  endereco,
  resumo,
  formaPagamento,
  status) {
  const data = {
    prestador, 
    contratante, 
    servicoPrestado, 
    data: new Date(dataServico), 
    preco: Number(preco), 
    endereco,
    resumo,
    formaPagamento: Number(formaPagamento),
    status: Number(status)
  };
  
  return axios.put(Ordem, data, Headers)
    .then(response => response.data)
    .catch(error => {
      console.log('OrdemService', error);
      throw(error);
    });
}

export function getOrdemById (id) {  
  return axios.get(Ordem.concat('?id=', id), data, Headers)
    .then(response => response.data)
    .catch(error => {
      console.log('OrdemService', error);
      throw(error);
    });
}