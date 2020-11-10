import { MunicipiosRegiaoMetropolitanaBH } from '../Endpoints.js';

export function GetTodosMunicipios () {
  return axios.get(MunicipiosRegiaoMetropolitanaBH)
    .then(response => response.data)
    .catch(error => {
      console.log('MunicipiosService', error)
      return error;
    });
} 