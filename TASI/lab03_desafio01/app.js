// ******************************************************************* 
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro         
// Analise e Desenvolvimento de Sistemas - Terceiro Semestre    
// Disciplina: Top. Avançados de SI - I                         
// Autor: Gustavo Silva Agapio - Data: 12/03/2024               
// Descrição: Desafio - Cliente / Server Calcular IMC                            
// *******************************************************************

// Variáveis:
const port = 4500;

// Importação de Módulos:
const http = require('http');
const url = require('url');

// Criação do Server:
const server = http.createServer((req, res) => {
    
    // Implementar as funcionalidades do módulo url:
    const reqUrl = url.parse(req.url, true);
    const path = reqUrl.pathname;
    const query = reqUrl.query;

    if (path === '/imc') {
        // declarar variáveis
        const peso = parseFloat(query.peso);
        let altura = parseFloat(query.altura);
        altura = altura / 100;

        if (isNaN(peso) || isNaN(altura)) {
            res.writeHead(400, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end("[ERRO 400] - Entre com os valores de peso (em kg) e altura (em cm) corretos!!");
        } else {
            const calcImc = peso / (altura * altura);

            if (calcImc <= 18.5) {
                res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                res.write(`Seu IMC: ${calcImc.toFixed(2)}. \n`);
                res.end(`Abaixo do Peso.`);

            } else if (calcImc <= 24.9) {
                res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                res.write(`Seu IMC: ${calcImc.toFixed(2)}. \n`);
                res.end(`Peso Normal.`);

            } else if (calcImc <= 29.9) {
                res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                res.write(`Seu IMC: ${calcImc.toFixed(2)}. \n`);
                res.end(`Sobrepeso.`);

            } else if (calcImc <= 34.9) {
                res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                res.write(`Seu IMC: ${calcImc.toFixed(2)}. \n`);
                res.end(`Obesidade grau I (Leve).`);

            } else if (calcImc <= 39.9) {
                res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                res.write(`Seu IMC: ${calcImc.toFixed(2)}. \n`);
                res.end(`Obesidade grau II (Moderada).`);

            } else {
                res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                res.write(`Seu IMC: ${calcImc.toFixed(2)}. \n`);
                res.end(`Obesidade grau III (MÓRBIDA).`);
            }
        }

    } else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end("404 - Rota Inválida ...");
    }
});

// Configuração do Server:
server.listen(port, () => {
    console.log(`[OK] Servidor iniciado com sucesso em http://localhost:${port} ...`);
});