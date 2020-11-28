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


data = {
    limpezaGeral: {
        "nome": "Limpeza geral",
        "descricaoServico": "Vários anos de experiência de limpeza e serviços gerais."
    },
    limpezaGeral: {
        "nome": "Encanamento",
        "descricaoServico": "Especialista em encanamentos e no conserto de vazamentos em geral."
    },
    limpezaGeral: {
        "nome": "Pintura",
        "descricaoServico": "Ótimo pintor, especialista em desenhos e pinturas artísticas."
    },
    limpezaGeral: {
        "nome": "Elétrica",
        "descricaoServico": "Vários anos de experiência em elétrica."
    },
    limpezaGeral: {
        "nome": "Jardinagem",
        "descricaoServico": "Vários anos de experiência de limpeza e serviços gerais."
    },
}