// ******************************************************************* 
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro         
// Analise e Desenvolvimento de Sistemas - Terceiro Semestre    
// Disciplina: Top. Avançados de SI - I                         
// Autor: Gustavo Silva Agapio - Data: 10/05/2024 - RGM: 34730753             
// Descrição: Projeto 1: Server com rota padrão, imc, dolar e inss                         
// *******************************************************************

const http = require('http');
const url = require('url');

function calcularDescontoINSS(salario) {
    let desconto;

    if (salario <= 1412.00) {
        desconto = salario * 0.075;
    } else if (salario <= 2666.68) {
        desconto = (salario - 1412.00) * 0.09 + 105.9;
    } else if (salario <= 4000.03) {
        desconto = (salario - 2666.68) * 0.12 + 105.9 + 112.92;
    } else if (salario <= 7786.02) {
        desconto = (salario - 4000.03) * 0.14 + 105.9 + 112.92 + 333.32;
    } else {
        desconto = 713.09;
    }

    return desconto.toFixed(2);
}

function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    const classificacao = getClassificacaoIMC(imc);
    return { imc: imc.toFixed(2), classificacao };
}

function getClassificacaoIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc < 24.9) {
        return 'Peso normal';
    } else if (imc < 29.9) {
        return 'Sobrepeso';
    } else if (imc < 34.9) {
        return 'Obesidade Grau I';
    } else if (imc < 39.9) {
        return 'Obesidade Grau II (severa)';
    } else {
        return 'Obesidade Grau III (mórbida)';
    }
}

function converterDolarParaReal(dolar, valor) {
    const convertido = dolar * valor;
    return convertido.toFixed(2);
}

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
