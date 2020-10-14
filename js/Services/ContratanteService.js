const submit = async (event) => {
    event.preventDefault();

    const nomeCompleto = document.getElementById('inputNomeCompleto').value;
    const endereco = document.getElementById('inputEndereco').value;
    const whatsapp = document.getElementById('inputWpp').value;
    const foto = document.getElementById('inputNomeCompleto').value;
    const url = 'https://localhost:44366/api/signup';

    const data = {
        userID: nomeCompleto,
        password: nomeCompleto+1+'!',
        nomeCompleto: nomeCompleto,
        endereco: endereco,
        telefone: whatsapp,
        linkFoto: foto,
        biografia: 'qualquerCoisa',
        tipo: "Cliente"
      };    

      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        data: JSON.stringify(data),
        url,
      };

      axios(options).then(response => console.log(response));
}

var botao = document.getElementById("botao_cadastrar");

botao.onclick = submit;