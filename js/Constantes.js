import { EstaLogado, getTokenDecodificado } from './Services/LoginService.js';

export const Headers = {
    'content-type': 'application/json',
    headers: {Authorization: `Bearer ${EstaLogado() ? getToken() : 'without token'}`}
};

export const TipoUsuario = {
    contratante: 'Cliente',
    prestadorDeServicos: 'Prestador'
}

export const rolesUsuario = {
    Prestador: 'Prestador-SSG_API',
    Admin: "Admin-SSG_API",
    Cliente: "Contratante-SSG_API"
}

export const formaPagamento = ['dinheiro', 'débito', 'crédito'];

export const statusOrdem = ['Aguardando confirmação', 'Em aberto', 'Finalizado', 'Cancelado'];