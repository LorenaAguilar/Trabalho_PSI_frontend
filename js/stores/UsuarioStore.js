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

//Id
export const getIdUsuario = () => {
    return sessionStorage.getItem('user-id');
}

export const setIdUsuario = (value) => {
    return sessionStorage.setItem('user-id', value);
}

export const existeIdUsuario = () => {
    return sessionStorage.getItem('user-id') !== null;
}