import { Servicos } from '../Endpoints.js';
import { Headers } from '../Constantes.js';

export function getTodosServicos () {
  return axios.get(Servicos, Headers)
    .then(response => response.data)
    .catch(error => {
      console.log('ServicosService', error);
      throw(error);
    });
}

export function encontrarIdServico(nome) {
    return getTodosServicos().then((todosServicos) => {
        return todosServicos.find(servico => servico.nome === nome.toUpperCase()).id;
    });
};