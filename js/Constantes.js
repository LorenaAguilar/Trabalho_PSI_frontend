import { getTokenUsuario } from './stores/UsuarioStore.js';

export const Headers = {
    'content-type': 'application/json',
    headers: {Authorization: `Bearer ${getTokenUsuario()}`}
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