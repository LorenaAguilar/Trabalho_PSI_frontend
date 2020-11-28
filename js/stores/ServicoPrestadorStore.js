//IdServicoPrestador
export const getIdServicoPrestador  = () => {
    return sessionStorage.getItem('ServicoPrestador-Id');
}

export const setIdServicoPrestador  = (value) => {
    return sessionStorage.setItem('ServicoPrestador-Id', value);
}

export const existeIdServicoPrestador  = () => {
    return sessionStorage.getItem('ServicoPrestador-Id') !== null;
}

export const removeIdServicoPrestador = () => {
    sessionStorage.removeItem('ServicoPrestador-Id');
}