// ******************************************************************* 
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro         
// Analise e Desenvolvimento de Sistemas - Terceiro Semestre    
// Disciplina: Top. Avançados de SI - I                         
// Autor: Gustavo Silva Agapio - Data: 26/03/2024               
// Descrição: Desafio da aula desse dia. Mostrar resultados com HTML                           
// *******************************************************************

//Funções de cálculo e análise do IMC
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    let htmlFilePath = '';

    if (imc <= 18.5) {
        htmlFilePath = 'abaixo.html';
    } else if (imc <= 25) {
        htmlFilePath = 'normal.html';
    } else if (imc <= 30) {
        htmlFilePath = 'sobrepeso.html';
    } else if (imc <= 35) {
        htmlFilePath = 'obesidade1.html';
    } else if (imc <= 40) {
        htmlFilePath = 'obesidade2.html';
    } else {
        htmlFilePath = 'obesidade3.html';
    }

    return htmlFilePath;
}

//Função para cálculo e análise das notas
function analisarNotas(notaA1, notaA2, valorMedia) {
    const resultado = (notaA1 + notaA2) / 2;
    let status = resultado >= valorMedia ? 'APROVADO' : 'REPROVADO';
    return {notaA1, notaA2, valorMedia, resultado, status};
}

//Função para cálculo da conversão de dólar
function converterDolar(dolarAtual, reais) {
    const convertido = reais / dolarAtual;
    return convertido.toFixed(2);
}

//Variáveis
const porta = 4800;

//Importar Módulos
const http = require('http');
const url = require('url');
const fs = require('fs');

//Criação do Server
const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    const path = reqUrl.pathname;
    const query = reqUrl.query;

    if (path === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Insira uma Rota.');
    } else if (path === '/imc') {
        const peso = parseFloat(query.peso);
        const altura = parseFloat(query.altura);

        if (isNaN(peso) || isNaN(altura)) {
            res.writeHead(400, {'Content-Type': 'text/html; charset=utf-8'});
            res.end("<h1>[ERRO 400] - Entre com os valores de peso (em kg) e altura (em cm) corretos!</h1>");
        } else {
            const htmlFilePath = calcularIMC(peso, altura);
            fs.readFile(htmlFilePath, 'utf-8', (err, data) => {
                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
                    res.end('<h1>500 - Erro interno servidor</h1>');
                } else {
                    data = data.replace(`{imc}`, (peso / (altura * altura)).toFixed(2));
                    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                    res.end(data);
                }
            });
        }
    } else if (path === '/notas') {
        fs.readFile('notas.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type':"text/html; charset=utf-8"});
                res.end('<h1>500 - Erro interno servidor</h1>');
            } else {
                const notaA1 = parseFloat(query.a1);
                const notaA2 = parseFloat(query.a2);
                const valorMedia = parseFloat(query.media);

                const resultado = analisarNotas(notaA1, notaA2, valorMedia);
                data = data.replace(`{notaA1}`, resultado.notaA1.toFixed(2));
                data = data.replace(`{notaA2}`, resultado.notaA2.toFixed(2));
                data = data.replace(`{valorMedia}`, resultado.valorMedia.toFixed(2));
                data = data.replace(`{resultado}`, resultado.resultado.toFixed(2));
                data = data.replace(`{status}`, resultado.status);

                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.end(data);
            }
        });
    } else if (path === '/dolar') {
        fs.readFile('dolar.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type':"text/html; charset=utf-8"});
                res.end('<h1>500 - Erro interno servidor</h1>');
            } else {
                const dolarAtual = parseFloat(query.dolar);
                const reais = parseFloat(query.valor);

                const convert = converterDolar(dolarAtual, reais);
                data = data.replace(`{dolarAtual}`, dolarAtual.toFixed(2));
                data = data.replace(`{reais}`, reais.toFixed(2));
                data = data.replace(`{convert}`, convert);

                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.end(data);
            }
        });
    } else {
        fs.readFile('erro404.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type':"text/html; charset=utf-8"});
                res.end('<h1>500 - Erro interno servidor</h1>');
            } else {
                res.writeHead(404, {'Content-Type':"text/html; charset=utf-8"});
                res.end(data);
            }
        });
    }
});

//Configuração do Server
server.listen(porta, () => {
    console.log(`[OK] Servidor iniciado com sucesso em http://localhost:${porta} ...`);
});
