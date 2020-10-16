const submit = (event) => {
    event.preventDefault();

    const usuario = document.getElementById('inputUsuario').value;
    const nomeCompleto = document.getElementById('inputNomeCompleto').value;
    const senha = document.getElementById('inputSenha').value;
    const endereco = document.getElementById('inputEndereco').value;
    const whatsapp = document.getElementById('inputWpp').value;
    const foto = document.getElementById('inputNomeCompleto').value;
    
    const url = 'https://localhost:44366/api/signup';

    const data = {
      userID: usuario,
      password: senha,
      nomeCompleto: nomeCompleto,
      endereco: endereco,
      telefone: whatsapp,
      linkFoto: foto,
      biografia: "string",
      tipo: "Cliente"
      };    
    
      const headers = {
        'content-type': 'application/json'
      }

      console.log(JSON.stringify(data));

      axios.post(url, data,  headers)
      .then(response => {
        console.log(response)
        if(response.data.result === "Succeeded") {
          console.log('Cadastro realizado com sucesso!')
        } else {
          console.log('Não foi possível realizar o cadastro!')
        }
      }).catch((response) => console.log('Erro desconhecido durante o cadastro do prestador', response));
}

var botao = document.getElementById("botao_cadastrar");

botao.onclick = submit;