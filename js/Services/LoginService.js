const login = (event) => {
    event.preventDefault();

    const usuario = document.getElementById('inputUsuario').value;
    const senha = document.getElementById('inputSenha').value;
    
    const url = 'https://localhost:44366/api/login';

    const data = {
        userID: usuario,
        password: senha
    };    

    const headers = {
    'content-type': 'application/json'
    }

    axios.post(url, data, headers)
    .then(response => {
        console.log(response.data);
        if(response.data.authenticated) {
            localStorage.setItem('tokenUser', response.data.accessToken);
            console.log('Login realizado com sucesso!!')
            console.log(localStorage.getItem('tokenUser'))
        }
    }).catch((error) => {
        console.log(error);
    });
}

var botao = document.getElementById("botao_login");
botao.onclick = login;