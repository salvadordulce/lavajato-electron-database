const alertaAdicionarNovoCliente = require("../scripts/alerta.js");
const bancoDeDados = require("../scripts/banco-de-dados");


function adicionarProduto(event) {
  event.preventDefault();

  var cliente = document.getElementById('cliente').value
  var carro = document.getElementById('carro').value
  var placa = document.getElementById('placa').value
  
  console.log(cliente, carro, placa)

var queryCadastrar = `INSERT INTO clientes (cliente, carro, placa) VALUES ("${cliente}","${carro}","${placa}")`

bancoDeDados.query(queryCadastrar, function (error) {
  if (error) {
      console.log("Ocorreu um erro ao inserir no banco de dados");
  } else {
    alertaAdicionarNovoCliente();
  }
})

  console.log('ENTROU NA FUNÇÃO ADICIONAR PRODUTO')

  //ESSE CÓDIGO DEVE SER MOSTRADO CASO O CLIENTE SEJA ADICIONADO COM SUCESSO AO BANCO DE DADOS
  alertaAdicionarNovoCliente()
}

var formulario = document.getElementById('formulario')
formulario.addEventListener('submit', adicionarProduto)