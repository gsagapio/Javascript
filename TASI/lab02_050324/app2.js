// ************************************************************ //
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro         //
// Analise e Desenvolvimento de Sistemas - Terceiro Semestre    //
// Disciplina: Top. Avançados de SI - I                         //
// Autor: Gustavo Silva Agapio - Data: 05/03/2024               //
// Descrição: Programa de Geração de um WebServer (Callback)   //
// ************************************************************ //

//Criando Modulo
const http = require('http');

//CRIAR UM FUNÇÃO CALLBECK
var callback = function(request, response){

    //Define o header com o tipo de resposta:
    response.writeHead(200, {"Content-type":"text/plain"});

    //Mensagem de retorno:
    response.end("UNICSUL - SAM - ADS ");
};

//Servidor HTTP
var server = http.createServer(callback);

//Copnfiguração do Server
server.listen(3000);
console.log("[OK] Servidor iniciado em http://localhost:3000 ...");