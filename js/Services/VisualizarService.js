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