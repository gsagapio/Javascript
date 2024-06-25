// ******************************************************************* 
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro         
// Analise e Desenvolvimento de Sistemas - Terceiro Semestre    
// Disciplina: Top. Avançados de SI - I                         
// Autor: Gustavo Silva Agapio - Data: 10/05/2024 - RGM: 34730753             
// Descrição: Projeto 1: Server com rota padrão, imc, dolar e inss                         
// *******************************************************************

const http = require('http');
const url = require('url');
const calcularIMC = require('./calculo_imc');
const converterDolarParaReal = require('./calculo_dolar');
const calcularDescontoINSS = require('./calculo_inss');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    const path = reqUrl.pathname;
    const query = reqUrl.query;

    if (path === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Bem-vindo ao nosso servidor!');
    } else if (path === '/imc') {
        const { peso, altura } = query;
        const { imc, classificacao } = calcularIMC(parseFloat(peso), parseFloat(altura));
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(`Seu IMC é: ${imc}. Classificação: ${classificacao}`);
    } else if (path === '/dolar') {
        const { dolar, valor } = query;
        const convertido = converterDolarParaReal(parseFloat(dolar), parseFloat(valor));
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(`Valor convertido para reais: R$ ${convertido}`);
    } else if (path === '/inss') {
        const { salario } = query;
        const descontoINSS = calcularDescontoINSS(parseFloat(salario));
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(`Desconto do INSS: R$ ${descontoINSS}`);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('404 - Rota não encontrada.');
    }
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
