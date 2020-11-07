const getMunicipios = () => {
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes/31030/municipios';
  
    return axios.get(url)
    .then((response) => {
      const nomesBairros = response.data.map((item) => item.nome);
      const optionsBairros = nomesBairros.map(nomeBairro => (`<option value="${nomeBairro}">${nomeBairro}</option>`)); 
      const optionsAux = [`<option value="${null}">Selecione uma opção</option>`].concat(optionsBairros);
      const selectElement = document.getElementById("select_regiao");
      selectElement.innerHTML = optionsAux;
      
    })
    .catch();
  };

const getInformationLogin = () => {
  const token = localStorage.getItem('tokenUser');
  console.log(token)
  if(token !== null) {
    const divElement = document.getElementById('login-sucesso');
    
    const payload = JSON.parse(window.atob(token.split('.')[1])); 
    
    divElement.innerHTML = `<strong class="card-title">Bem vindo(a), ${payload.unique_name[0]}! </strong>`;

    /* const url = '';
    const data = {
      
    };
    const headers = {
    'content-type': 'application/json'
    }

  
    axios.get(url, data, headers)
    .then((response) => {
      divElement.innerHTML = `<strong class="card-title">Bem vindo(a), ${response.data.nomeCompleto}! </strong>`;
    })
    .catch((erros) => console.log(erros)); */
  } else {
    const divElement = document.getElementById('sem-login');

    divElement.innerHTML = `Faça seu login <a style="color: red;" href="../index.html">aqui</a> para contratar um de nossos serviços`;   
  }
}




const inserirInformacoes = () =>{
    let informations = [{
        nome: "Leonardo Da Vinci",
        servico: "Pintor",
        regiao: "Sarzedo",
        preco: "100",
        biografia: "Ótimo pintor, especialista em desenhos e pinturas artísticas.",
        imagem: "https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2019/06/24/leo.jpg"
    },
    {
        nome: "Mario Bros",
        servico: "Encanamento",
        regiao: "Belo Horizonte",
        preco: "80",
        biografia: "Especialista em encanamentos e no conserto de vazamentos em geral.",
        imagem: "https://ecom.amenworld.com/WebRoot/ce_pt/Shops/228523/5A6B/010B/A45B/77D1/CABA/C0A8/1911/3EEC/mario-2_m.png"
    },
    {
        nome: "Dobby",
        servico: "Limpeza geral",
        regiao: "Santa Luzia",
        preco: "140",
        biografia: "Vários anos de experiência de limpeza e serviços gerais.",
        imagem: "https://lh3.googleusercontent.com/proxy/pqypdndQmuarQQRlrSZJQUoZJR4575V68DKCv5LG9WV9L02EK4N9IokaOWGmVhAXIdHA6SxMbryW8G1ZeN7i5cAvb2jh77NFyHPKqdEp12aax70_A8VFpHJpP-OzFqL_oC_jpkgEht4X7n50jCrrle6gCTetvyBrdUOaBFsGOaosXV52Er6E969D47stR5W3AcUAHJp7mChBlw"
    }];
    
    const filtros = {
      servico: document.getElementById('select_servico').value,
      regiao: document.getElementById('select_regiao').value
    }

    if(filtros.regiao !== 'null') {
      informations = informations.filter((information) => information.regiao === filtros.regiao)
    }

    if(filtros.servico !== 'null') {
      informations = informations.filter((information) => information.servico === filtros.servico)
    }

    console.log(filtros);

const listaServicos = document.getElementById('listaServicos');



listaServicos.innerHTML = informations.map((information) =>(`
<div id="containerServicoPrestado" class="row">
<div id="campoImagem" class="col-2">
<img src= ${information.imagem} />
 </div>
 <div id="informacoes"  class="col-10" >
 <strong id="informacoesPrestador"> 
 <p>Nome: ${information.nome}</p> 
 <p>Serviço: ${information.servico}</p>
 <p>Região que atende: ${information.regiao}</p>
 <p>Preço: R$ ${information.preco} (hora)</p>
 <hr />
 <p>
Biografia: ${information.biografia}
 </p>
</strong>
 </div>
</div>`)).join("");
}

getMunicipios().then(() => {
  getInformationLogin();
  
  inserirInformacoes();
}).then(() => {
  document.getElementById('botaoFiltrar').onclick = (event) => { 
    event.preventDefault();
    inserirInformacoes();
  }
})