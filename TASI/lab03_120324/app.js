// ******************************************************************* 
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro         
// Analise e Desenvolvimento de Sistemas - Terceiro Semestre    
// Disciplina: Top. Avançados de SI - I                         
// Autor: Gustavo Silva Agapio - Data: 12/03/2024               
// Descrição: Aplicação de geração de Server, no qual ira processar
//       informações e criar retorno de acordo com status code.                             
// *******************************************************************

//Variáveis do projeto:
const port = 4500; 

// Importação dos modulos:
const http = require('http');
const url = require('url');

// Criação do Server:
const server = http.createServer((req, res) => {
    //Implementar as funcionalidades do modulo url:
    const reqUrl = url.parse(req.url, true);
    const path = reqUrl.pathname;
    const query = reqUrl.query;

    if(path === '/notas'){
        //declarar variaveis
        const notaA1 = parseFloat(query.a1);
        const notaA2 = parseFloat(query.a2);

        if(isNaN(notaA1) || isNaN(notaA2)){
            res.writeHead(400, {'Content-Type':'text/plain; charset = utf-8'});
            res.end("[ERRO 400] - Entre com os valores corretos!!");
        }else{
            const media = (notaA1 + notaA2) / 2;

            if(media >= 6 || media <= 10){
                res.writeHead(200, {'Content-Type':'text/plain; charset = utf-8'});
                res.end(`Parabens - Aluno aprovado com media: ${media.toFixed(2)}`);

            }else{
                res.writeHead(200, {'Content-Type':'text/plain; charset = utf-8'});
                res.end(`Parabens - Aluno com media de: ${media.toFixed(2)}, reprovado.`);
            } 
        }

    } else{
        res.writeHead(404, {'Content-Type':'text/plain; charset = utf-8'});
        res.end("404 - Rota Invalida ...");
    }

});

//Configuração do Server:
server.listen(port, () => {
    console.log(`[OK] Servidor iniciado com sucesso em http://localhost:${port} ...`);

})