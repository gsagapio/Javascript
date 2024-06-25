// ******************************************************************* 
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro         
// Analise e Desenvolvimento de Sistemas - Terceiro Semestre    
// Disciplina: Top. Avançados de SI - I                         
// Autor: Gustavo Silva Agapio - Data: 26/03/2024               
// Descrição: Média do Aluno, INSS e IMC                          
// *******************************************************************

//Variáveis
const porta = 4800;

//Importar Modulos
const http = require('http');
const url = require('url');

//Criação do Server
const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    const path = reqUrl.pathname;
    const query = reqUrl.query;

    if (path === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Insira uma Rota.');
    }
    else if (path === '/imc') {
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Rota IMC.');
    }
    else if (path === '/notas') {
        const notaA1 = parseFloat(query.a1);
        const notaA2 = parseFloat(query.a2);
        const valorMedia = parseFloat(query.media);

        const resultado = (notaA1 + notaA2) / 2;

        if (isNaN(notaA1) || isNaN(notaA2) || isNaN(valorMedia)) {
            res.writeHead(400, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end("[ERRO] Valores Incorretos. Preencha as notas corretamente!!!");
        } else {
            if (resultado >= valorMedia) {
                res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                res.write(`Nota 1: ${notaA1.toFixed(2)}\n`);
                res.write(`Nota 2: ${notaA2.toFixed(2)}\n`);
                res.write(`Media inserida: ${valorMedia.toFixed(2)}\n`);
                res.write(`Media correta: ${resultado.toFixed(2)}\n`);
                res.end('APROVADO');
            } else {
                res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                res.write(`Nota 1: ${notaA1.toFixed(2)}\n`);
                res.write(`Nota 2: ${notaA2.toFixed(2)}\n`);
                res.write(`Media inserida: ${valorMedia.toFixed(2)}\n`);
                res.write(`Media correta: ${resultado.toFixed(2)}\n`);
                res.end('REPROVADO');
            }
        } 
    }
    else if (path === '/dolar') {
        const dolarAtual = parseFloat(query.dolar);
        const reais = parseFloat(query.valor);

        if (isNaN(dolarAtual) || isNaN(reais)) {
            res.writeHead(400, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end('[ERRO] Valores Incorretos. Preencha corretamente!!!\n');

        } else {
            const convert = reais / dolarAtual;
            
            res.writeHead(400, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end(`
            Valor a converter R$: ${reais.toFixed(2)}\n
            Dolar atual: ${dolarAtual.toFixed(2)}\n
            Valor Convertido: ${convert.toFixed(2)}\n`);
        }


    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('[ERRO] 404 - Rota invalida.');
    }
});

//Configuração do Server
server.listen(porta, () => {
    console.log(`[OK] Servidor iniciado com sucesso em http://localhost:${porta} ...`);
});