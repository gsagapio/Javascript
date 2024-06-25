// ******************************************************************* 
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro         
// Analise e Desenvolvimento de Sistemas - Terceiro Semestre    
// Disciplina: Top. Avançados de SI - I                         
// Autor: Gustavo Silva Agapio - Data: 19/03/2024               
// Descrição: Calculo IMC com Cliente Servidor                         
// *******************************************************************

// Variáveis:
const porta = 4380;

// Importação de Módulos:
const http = require('http');
const url = require('url');
const fs = require('fs');

// Criação do Server:
const server = http.createServer((req, res) => {

    // Implementar as funcionalidades do módulo url:
    const reqUrl = url.parse(req.url, true);
    const path = reqUrl.pathname;
    const query = reqUrl.query;

    if(path === '/imc'){ //Verifica igualdade de caminho
        //Converte os valores
        const peso = parseFloat(query.peso);
        const altura = parseFloat(query.altura);

        fs.readFile('principal.html', 'utf-8', (err, data) => {
            if(err){
                res.writeHead(500, {'Content-Type':"text/plain: charset=utf-8"});
                res.end('500 - Erro interno servidor')
            } else{
                data = data.replace(`{imc}`, imc.toFixed(2));
                res.writeHead(200, {'Content-Type':"text/html; charset=utf-8"});
                res.end(data);
            }
        })
        
        //Verifica se os valores foram inseridos
        if (isNaN(peso) || isNaN(altura)) {
            res.writeHead(400, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end("[ERRO 400] - Entre com os valores de peso (em kg) e altura (em cm) corretos!");

        } else{
            //Calculo IMC
            imc = peso / (altura * altura);

            if(imc <= 18.5){
                //Abaixo do Peso
                fs.readFile('abaixo.html', 'utf-8', (err, data) => {
                    if(err){
                        res.writeHead(500, {'Content-Type':"text/plain: charset=utf-8"});
                        res.end('500 - Erro interno servidor')
                    } else{
                        data = data.replace(`{imc}`, imc.toFixed(2));
                        res.writeHead(200, {'Content-Type':"text/html; charset=utf-8"});
                        res.end(data);
                    }
                })

            }else if(imc <= 25){
                //Peso normal
                  fs.readFile('normal.html', 'utf-8', (err, data) => {
                    if(err){
                        res.writeHead(500, {'Content-Type':"text/plain: charset=utf-8"});
                        res.end('500 - Erro interno servidor')
                    } else{
                        data = data.replace(`{imc}`, imc.toFixed(2));
                        res.writeHead(200, {'Content-Type':"text/html; charset=utf-8"});
                        res.end(data);
                    }
                })
                
            }else if(imc <= 30){
                //Sobrepeso
                fs.readFile('sobrepeso.html', 'utf-8', (err, data) => {
                    if(err){
                        res.writeHead(500, {'Content-Type':"text/plain: charset=utf-8"});
                        res.end('500 - Erro interno servidor')
                    } else{
                        data = data.replace(`{imc}`, imc.toFixed(2));
                        res.writeHead(200, {'Content-Type':"text/html; charset=utf-8"});
                        res.end(data);
                    }
                })
                
            }else if(imc <= 35){
                //Obsedidade I
                fs.readFile('obesidade1.html', 'utf-8', (err, data) => {
                    if(err){
                        res.writeHead(500, {'Content-Type':"text/plain: charset=utf-8"});
                        res.end('500 - Erro interno servidor')
                    } else{
                        data = data.replace(`{imc}`, imc.toFixed(2));
                        res.writeHead(200, {'Content-Type':"text/html; charset=utf-8"});
                        res.end(data);
                    }
                })
                
            }else if(imc <= 40){
                //Obsedidade II
                fs.readFile('obesidade2.html', 'utf-8', (err, data) => {
                    if(err){
                        res.writeHead(500, {'Content-Type':"text/plain: charset=utf-8"});
                        res.end('500 - Erro interno servidor')
                    } else{
                        data = data.replace(`{imc}`, imc.toFixed(2));
                        res.writeHead(200, {'Content-Type':"text/html; charset=utf-8"});
                        res.end(data);
                    }
                })
                
            } else{
                //Obsedidade III
                fs.readFile('obesidade3.html', 'utf-8', (err, data) => {
                    if(err){
                        res.writeHead(500, {'Content-Type':"text/plain: charset=utf-8"});
                        res.end('500 - Erro interno servidor')
                    } else{
                        data = data.replace(`{imc}`, imc.toFixed(2));
                        res.writeHead(200, {'Content-Type':"text/html; charset=utf-8"});
                        res.end(data);
                    }
                })
                
            }
        }

    } else{
        fs.readFile('erro404.html', 'utf-8', (err, data) => {
            if(err){
                res.writeHead(500, {'Content-Type':"text/plain: charset=utf-8"});
                res.end('500 - Erro interno servidor')
            } else{
                res.writeHead(404, {'Content-Type':"text/html; charset=utf-8"});
                res.end(data);
            }
        })
    }
});

// Configuração do Server:
server.listen(porta, () => {
    console.log(`[OK] Servidor iniciado com sucesso em http://localhost:${porta} ...`);
});