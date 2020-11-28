//Exemplo
export const getExemploUsuario = () => {
    return sessionStorage.getItem('user-exemplo');
}

export const setExemploUsuario = (value) => {
    return sessionStorage.setItem('user-exemplo', value);
}

export const existeExemploUsuario = () => {
    return sessionStorage.getItem('user-exemplo') !== null;
}