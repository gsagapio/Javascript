// ************************************************************ //
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro         //
// Analise e Desenvolvimento de Sistemas - Terceiro Semestre    //
// Disciplina: Top. Avançados de SI - I                         //
// Autor: Gustavo Silva Agapio - Data: 27/02/2024               //
// Descrição: Programa de Geração de um Web Server              //
// ************************************************************ //

//Carregar um modulo HTTP
const http = require('http');

//Criar um servidor HTTP
var server = http.createServer(
    function(request, response){
        //Definir o header da resposta do servidor
        response.writeHead(200, {"Content-type": "text/plain"});

        //mensagem de retorno:
        response.end("Ola Mundo! ADS Santo Amaro...");

    }
)

//Configurar o servidor HTTP
    server.listen(3000);
    console.log("Servidor iniciado em = http://localhost:3000 ....");

    /*
    */