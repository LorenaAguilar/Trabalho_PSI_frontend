//AuthToken
export const getAuthTokenFacebook = () => {
    return sessionStorage.getItem('user-auth-token');
}

export const setAuthTokenFacebook = (value) => {
    return sessionStorage.setItem('user-auth-token', value);
}

export const existeAuthTokenFacebook = () => {
    return sessionStorage.getItem('user-auth-token') !== null;
}