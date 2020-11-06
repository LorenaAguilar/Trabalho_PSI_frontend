const getMunicipios = () => {
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes/31030/municipios';
  
    axios.get(url)
    .then((response) => {
      const nomesBairros = response.data.map((item) => item.nome);
      const optionsBairros = nomesBairros.map(nomeBairro => (`<option value="${nomeBairro}">${nomeBairro}</option>`)); 
  
      const selectElement = document.getElementById("select_regiao");
      selectElement.innerHTML = optionsBairros;
      
    })
    .catch();
  };
getMunicipios();

const getInformationLogin = () => {
  const token = localStorage.getItem('tokenUser');
  console.log(token)
  if(token !== null) {
    const divElement = document.getElementById('login-sucesso');
    
    var payload = JSON.parse(window.atob(token.split('.')[1])); 
    
    divElement.innerHTML = `<strong class="card-title">Bem vindo(a), ${payload.unique_name[0]}! </strong>`;
  } else {
    const divElement = document.getElementById('sem-login');

    divElement.innerHTML = `Faça seu login <a style="color: red;" href="../index.html">aqui</a> para contratar um de nossos serviços`;   
  }
}
getInformationLogin();