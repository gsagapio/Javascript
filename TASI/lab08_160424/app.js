//Importação do modulo Express
const express = require('express');
const router = require('./rotas/index')

//Configuração da aplicação:
const app = express();
app.use('/', router);

//===============================

//Exportação
module.exports = app;