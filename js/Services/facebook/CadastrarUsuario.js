import { Facebook } from '../../Endpoints.js';
import { TipoUsuario, Headers } from '../../Constantes.js';

export function signInContranteFacebook(accessToken, endereco,telefone, biografia, cpf) {
    const data = {
        accessToken: accessToken,
        endereco: endereco,
        telefone: telefone,
        biografia: biografia,
        tipo: TipoUsuario.contratante,
        cpf: cpf
    };

    return axios.post(Facebook, data, {"content-type": Headers["content-type"]})
    .then((response) => {
        return response.data;
    })
    .catch(error => {
        console.log('CadastrarUsuarioFacebook', error);
        throw(error);
    });
}

export function signInPrestadorFacebook(accessToken, endereco,telefone, biografia, cpf, unidadeDeCobranca, localDeAtendimento, servico, preco) {
    const data = {
        accessToken: accessToken,
        endereco: endereco,
        telefone: telefone,
        biografia: biografia,
        tipo: TipoUsuario.contratante,
        cpf: cpf,
        unidadeDeCobranca: unidadeDeCobranca,
        localDeAtendimento: localDeAtendimento,
        servico: servico,
        preco: preco
    };

    return axios.post(Facebook, data)
    .then((response) => {
        return response.data;
    })
    .catch(error => {
        console.log('CadastrarUsuarioFacebook', error);
        throw(error);
    });
}