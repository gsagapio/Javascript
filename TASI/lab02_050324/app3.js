// ************************************************************ //
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro         //
// Analise e Desenvolvimento de Sistemas - Terceiro Semestre    //
// Disciplina: Top. Avançados de SI - I                         //
// Autor: Gustavo Silva Agapio - Data: 05/03/2024               //
// Descrição: Geração de um WebServer (Callback/ Rotas)         //
// ************************************************************ //

//Criando Modulo
const http = require('http');
const url = require('url');

//CRIAR UM FUNÇÃO CALLBECK
var callback = function(request, response){

    //Define o header com o tipo de resposta:
    response.writeHead(200, {"Content-type":"text/plain"});

    // Faz o Parse da URL separando o caminho(rota) - End Point:
    var parts = url.parse(request.url);

    //Verifica o end point - Rota:
    if(parts.path == "/"){
        response.end("Página Principal");
    }else if(parts.path == "/rota1"){
        response.end("Rota 1");
    }else if(parts.path == "/rota2"){
        response.end("Rota 2");
    }else {
        response.end("404 - Rota Invalida ...");
    }

};

//Servidor HTTP
var server = http.createServer(callback);

//Copnfiguração do Server
server.listen(3000);
console.log("[OK] Servidor iniciado em http://localhost:3000 ...");