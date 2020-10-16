const submit = (event) => {
    event.preventDefault();

    const usuario = document.getElementById('inputUsuario').value;
    const senha = document.getElementById('inputSenha').value;
    const nomeCompleto = document.getElementById('inputNomeCompleto').value;
    const endereco = document.getElementById('inputEndereco').value;
    const whatsapp = document.getElementById('inputWpp').value;
    const foto = document.getElementById('inputNomeCompleto').value;
    const inputBiografia = document.getElementById('inputBiografia').value;
    
    const url = 'https://localhost:44366/api/signup';

    const data = {
        userID: usuario,
        password: senha,
        nomeCompleto: nomeCompleto,
        endereco: endereco,
        telefone: whatsapp,
        linkFoto: foto,
        biografia: inputBiografia,
        tipo: "Prestador"
      };    

      const headers = {
        'content-type': 'application/json'
      }

      const divAviso = document.getElementById('aviso');
      
      axios.post(url, data,  headers)
      .then(response => {
        if(response.data.result === "Succeeded") {
          divAviso.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">O cadastro foi realizado com sucesso!</div>`;
        } else {
          divAviso.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">Não foi possível realizar o cadastro!</div>`;
          console.log('Erro desconhecido durante o cadastro do prestador', response)
        }
      }).catch((response) => 
        { 
          divAviso.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">Não foi possível realizar o cadastro!</div>`;
          console.log('Erro desconhecido durante o cadastro do prestador', response)
        });
}

var botao = document.getElementById("botao_cadastrar");
botao.onclick = submit;

var botaoCancelar = document.getElementById("botao_cancelar");
botaoCancelar.onclick = (event) => {
  event.preventDefault();
  window.history.go(-1);
} 