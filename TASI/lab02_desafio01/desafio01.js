// ************************************************************ //
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro         //
// Analise e Desenvolvimento de Sistemas - Terceiro Semestre    //
// Disciplina: Top. Avançados de SI - I                         //
// Autor: Gustavo Silva Agapio - Data: 05/03/2024               //
// Descrição: Projeto A2 - Parte I                              //
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
        response.end("Pagina Principal - Seja Bem Vindo!");

    }else if(parts.path == "/download/pdf"){
        response.end("Pagina para ser feito o download de um pdf.");

    }else if(parts.path == "/download/html"){
        response.end("Pagina para ser feito o download de um html.");

    }else if(parts.path == "/download/jpeg"){
        response.end("Pagina para ser feito o download de um jpeg.");
    
    }else if(parts.path == "/download/json"){
        response.end("Pagina para ser feito o download de um json.");

    } else if(parts.path == "/download/docx"){
        response.end("Pagina para ser feito o download de um docx.");

    }else if(parts.path == "/download/quemsomos"){
        response.end("Pagina do Quem Somos.");

    }
    else {
        response.end("404 - Rota Invalida ...");
    }

};

//Servidor HTTP
var server = http.createServer(callback);

//Copnfiguração do Server
server.listen(6555);
console.log("[OK] Servidor iniciado em http://localhost:6555 ...");