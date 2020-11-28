//Id
export const getIdOrdem = () => {
    return sessionStorage.getItem('ordem-Id');
}

export const setIdOrdem = (value) => {
    return sessionStorage.setItem('ordem-Id', value);
}

export const existeIdOrdem = () => {
    return sessionStorage.getItem('ordem-Id') !== null;
}

export const removeIdOrdem = () => {
    sessionStorage.removeItem('ordem-Id');
}