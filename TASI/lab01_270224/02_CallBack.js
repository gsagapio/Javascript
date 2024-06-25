// ************************************************************ //
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro         //
// Analise e Desenvolvimento de Sistemas - Terceiro Semestre    //
// Disciplina: Top. Avançados de SI - I                         //
// Autor: Gustavo Silva Agapio - Data: 27/02/2024               //
// Descrição: Web Server (Call Back função)                     //
// ************************************************************ //

//Carregar um modulo HTTP
const http = require('http');

//Criação com uso do CallBack
var callback = function(request, response){
    //Define o Header com o tipo de resposta:
    response.writeHead(200, {"Content-type":"text/plain; charset=utf-8"});

    //Mensagem de retorno:
    response.end("UNICSUL - CallBack modo ON");
};

//Ativação do Servidor HTTP:
var server = http.createServer(callback);

//Configuração do webserver
server.listen(4500);
console.log("[OK] - Servidor criado com sucesso na porta 4500 ...");
