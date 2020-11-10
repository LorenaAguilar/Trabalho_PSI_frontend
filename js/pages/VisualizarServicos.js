import { getTokenDecodificado, EstaLogado } from '../services/LoginService.js';
import { GetTodosMunicipios } from '../services/MunicipiosService.js'; 

GetTodosMunicipios().then((response) => {
  const nomesBairros = response.map((item) => item.nome);
  const optionsBairros = nomesBairros.map(nomeBairro => (`<option value="${nomeBairro}">${nomeBairro}</option>`)); 
  const optionsAux = [`<option value="${null}">Selecione uma opção</option>`].concat(optionsBairros);
  
  const selectElement = document.getElementById("select_regiao");
  selectElement.innerHTML = optionsAux;
}).then(() => {
  getInformationLogin();
  inserirInformacoes();
}).then(() => {
  document.getElementById('botaoFiltrar').onclick = (event) => { 
    event.preventDefault();
    inserirInformacoes();
  }
});

const getInformationLogin = () => {
  if(EstaLogado) {
    const divElement = document.getElementById('login-sucesso');
    
    const { unique_name } = getTokenDecodificado();
    
    divElement.innerHTML = `<strong class="card-title">Bem vindo(a), ${unique_name[0]}! </strong>`;

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

    divElement.innerHTML = `Faça seu login <a style="color: red;" href="../../index.html">aqui</a> para contratar um de nossos serviços`;   
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
      imagem: "data:image/jpeg;base64,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"
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

  const listaServicos = document.getElementById('listaServicos');

  listaServicos.innerHTML = informations.map((information) =>(`
    <div id="containerServicoPrestado" class="row">
      <div id="campoImagem" class="col-2">
        <img src= ${information.imagem} />
      </div>
      <div id="informacoes"  class="col-10" >
        <strong id="informacoesPrestador"> 
          <p>
            Nome: ${information.nome}
          </p> 
          <p>
            Serviço: ${information.servico}
          </p>
          <p>
            Região que atende: ${information.regiao}
          </p>
          <p>
            Preço: R$ ${information.preco} (hora)
          </p>
          <hr />
          <p>
            Biografia: ${information.biografia}
          </p>
        </strong>
      </div>
    </div>`)).join("");
}