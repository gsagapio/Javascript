// ******************************************************************* 
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro         
// Analise e Desenvolvimento de Sistemas - Terceiro Semestre    
// Disciplina: Top. Avançados de SI - I                         
// Autor: Gustavo Silva Agapio - Data: 02/04/2024               
// Descrição: Rotas Nome do Aluno, inss, bhaskara, fgts, salario                           
// *******************************************************************

//Funções de tratamento de erros
function error404(res) {
    res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('[ERRO] 404 - Rota não encontrada.');
}

function error400(res) {
    res.writeHead(400, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('Erro 400 - Requisição inválida.');
}

//Funções de cálculo e análise do INSS
function calcDescINSS(valorSalario) {
    let descontoINSS;

    if (valorSalario <= 1412.00) {
        descontoINSS = valorSalario * 0.075;
    } else if (valorSalario <= 2666.68) {
        descontoINSS = (valorSalario - 1412.00) * 0.09 + 105.9;
    } else if (valorSalario <= 4000.03) {
        descontoINSS = (valorSalario - 2666.68) * 0.12 + 105.9 + 112.92;
    } else if (valorSalario <= 7786.02) {
        descontoINSS = (valorSalario - 4000.03) * 0.14 + 105.9 + 112.92 + 333.32;
    } else {
        descontoINSS = 713.09;
    }

    return descontoINSS;
}

//Funções de cálculo e análise do FGTS
function calcDescFGTS(salarioFGTS) {
    const descFGTS = salarioFGTS * 0.8;
    return descFGTS;
}

//Funções de cálculo e análise da equação de Bhaskara
function calcularBhaskara(a, b, c) {
    const delta = b * b - 4 * a * c;
    const raizes = [];

    if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta))/(2*a);
        const x2 = (-b - Math.sqrt(delta))/(2*a);
        raizes.push(x1, x2);
    } else if (delta === 0) {
        const x = -b / (2 * a);
        raizes.push(x);
    } else {
        const parteReal = -2 / (2 * a);
        const parteImag = Math.sqrt(-delta)/(2 * a);
        raizes.push(`${parteReal} + ${parteImag}j`, `${parteReal} - ${parteImag}j`);
    }

    return raizes;
}

//Função para cálculo e análise do salário
function calcularSalario(salarioBruto) {
    const resultadoDescFGTS = calcDescFGTS(salarioBruto);
    const resultadoDescINSS = calcDescINSS(salarioBruto);
    return `Salário R$${salarioBruto.toFixed(2)} - Desconto INSS R$${resultadoDescINSS.toFixed(2)} - Desconto FGTS R$${resultadoDescFGTS.toFixed(2)}`;
}

//Main
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    const path = reqUrl.pathname;
    const query = reqUrl.query;

    if (path === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Nome do aluno criador: Gustavo Silva Agapio');
    } else if (path === '/inss') {
        const valorSalario = parseFloat(query.salario);
        if (isNaN(valorSalario)) {
            error400(res);
        } else {
            const resultadoDescINSS = calcDescINSS(valorSalario);
            res.writeHead(200, {'Content-Type' : 'text/plain; charset=utf-8'});
            res.end(`Salário: R$${valorSalario.toFixed(2)} - Desconto do INSS: R$${resultadoDescINSS.toFixed(2)}`);
        }
    } else if (path === '/bhaskara') {
        const a = parseFloat(query.a);
        const b = parseFloat(query.b);
        const c = parseFloat(query.c);

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            error400(res);
        } else {
            const raizes = calcularBhaskara(a, b, c);
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end(`Raízes da equação de 2 grau:\n${raizes}`);
        }
    } else if (path === '/fgts') {
        const salarioFGTS = parseFloat(query.salarioFGTS);

        if (isNaN(salarioFGTS)) {
            error400(res);
        } else {
            const resultadoDescFGTS = calcDescFGTS(salarioFGTS);
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end(`Salário R$${salarioFGTS.toFixed(2)} - Desconto FGTS R$${resultadoDescFGTS.toFixed(2)}`);
        }
    } else if (path === '/salario') {
        const salarioBruto = parseFloat(query.salarioBruto);

        if (isNaN(salarioBruto)) {
            error400(res);
        } else {
            const resultadoSalario = calcularSalario(salarioBruto);
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end(resultadoSalario);
        }
    } else {
        error404(res);
    }
});

const porta = 9876;
server.listen(porta, () => {
    console.log(`[OK] Servidor iniciado com sucesso em http://localhost:${porta} ...`);
});