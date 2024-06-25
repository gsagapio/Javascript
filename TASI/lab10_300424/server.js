// ******************************************************************* 
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro         
// Analise e Desenvolvimento de Sistemas - Terceiro Semestre    
// Disciplina: Top. Avançados de SI - I                         
// Autor: Gustavo Silva Agapio - Data: 30/04/2024               
// Descrição: PROJETO - Pizzaria do Zé                         
// *******************************************************************

//Main
const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    const path = reqUrl.pathname;

    if (path === '/') {
        fs.readFile('index.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
                res.end('500 - Erro interno do servidor');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.end(data);
            }
        });
    } else if (path === '/cardapio') {
        fs.readFile('cardapio.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
                res.end('500 - Erro interno do servidor');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.end(data);
            }
        });
    } else if (path === '/pedidos') {
        fs.readFile('pedidos.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
                res.end('500 - Erro interno do servidor');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('404 - Página não encontrada');
    }
});

const porta = 4500;

server.listen(porta, () => {
    console.log(`[OK] Servidor iniciado com sucesso em http://localhost:${porta} ...`);
});
