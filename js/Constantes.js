import { getToken } from './Services/LoginService.js';

export const Headers = {
    'content-type': 'application/json',
    headers: {Authorization: `Bearer ${getToken()}`}
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