//*************************************************************************
//  UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro
//  Análise e Desenvolvimento de Sistemas - 3º Semestre
// Autor: Gustavo Silva Agapio - Data: 10/05/2024 - RGM: 34730753    
//  Descrição: Server que processará as informações e retornará o Status Code
//*************************************************************************

//Variáveis do projetos:
const express = require('express');
const path = require('path');

const app = express();
const PORT = 4500; // Porta que o servidor irá escutar

// Definindo o middleware para servir arquivos estáticos
app.use(express.static(__dirname));

// Rota para o caminho 'index.html'
app.get('', (req, res) => {
    // Redirecionar para a página '/cardapio/cardapio.html'
    res.redirect('index.html');
  });

// Rota para o caminho '/cardapio'
app.get('/cardapio', (req, res) => {
  // Redirecionar para a página '/cardapio/cardapio.html'
  res.redirect('cardapio.html');
});

// Rota para o caminho '/pedido'
app.get('/pedidos', (req, res) => {
    // Redirecionar para a página '/cardapio/cardapio.html'
    res.redirect('pedidos.html');
  });

// Lidando com todas as outras rotas
app.use((req, res, next) => {
  // Verificar se o caminho é '/cardapio'
  if (req.url === '') {
    // Se for, redirecionar
    res.redirect('index.html');
  } else {
    // Caso contrário, enviar mensagem de erro 500
    res.status(500).send('Erro 500 - Página não encontrada');
  }
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

