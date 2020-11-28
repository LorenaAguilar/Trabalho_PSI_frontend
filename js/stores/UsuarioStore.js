//tipo
export const getTipoUsuario = () => {
    return sessionStorage.getItem('user-type');
}

export const setTipoUsuario = (value) => {
    return sessionStorage.setItem('user-type', value);
}

export const existeTipoUsuario = () => {
    return sessionStorage.getItem('user-type') !== null;
}