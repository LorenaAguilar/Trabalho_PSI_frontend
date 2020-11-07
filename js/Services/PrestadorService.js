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
          realizarLogin(usuario, senha).then(cadastrarServico());
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

const cadastrarServico = () => {
  const tipoServico = document.getElementById('inputTipoServico').value;
  const preco = document.getElementById('inputPreco').value;
  const area = document.getElementById('inputArea').value;

  const url = 'https://localhost:44366/api/servico';

  const data = {
      userID: tipoServico,
      password: preco,
      area: area
  };    

  const headers = {
      'content-type': 'application/json'
  }

  return axios.post(url, data, headers)
  .then(response => {
      console.log(response.data);
      if(response.data.authenticated) {
          localStorage.setItem('tokenUser', response.data.accessToken);
      }
  }).catch((error) => {
      console.log(error);
  });
}

const realizarLogin = (usuario, senha) => {
  const url = 'https://localhost:44366/api/login';

  const data = {
      userID: usuario,
      password: senha
  };    

  const headers = {
      'content-type': 'application/json'
  }

  return axios.post(url, data, headers)
  .then(response => {
      console.log(response.data);
      if(response.data.authenticated) {
          localStorage.setItem('tokenUser', response.data.accessToken);
      }
  }).catch((error) => {
      console.log(error);
  });
};

var botao = document.getElementById("botao_cadastrar");
botao.onclick = submit;

var botaoCancelar = document.getElementById("botao_cancelar");
botaoCancelar.onclick = (event) => {
  event.preventDefault();
  window.history.go(-1);
}

const getMunicipios = () => {
  const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes/31030/municipios';

  axios.get(url)
  .then((response) => {
    const nomesBairros = response.data.map((item) => item.nome);
    const optionsBairros = nomesBairros.map(nomeBairro => (`<option value="${nomeBairro}">${nomeBairro}</option>`)); 

    const selectElement = document.getElementById("inputArea");
    selectElement.innerHTML = optionsBairros;
    
  })
  .catch();
};
getMunicipios();