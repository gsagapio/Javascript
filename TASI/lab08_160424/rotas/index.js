//Importação:
const express = require('express');

//Cria Rota:
const router = express.Router();

//Cria a rota "/":
router.get('/', (req, res) => {
    res.send("Texto vindo do index.js ...");
})

//Cria rota 1:
router.get('/rota1', (req, res) => {
    res.send("Texto vindo da rota 1 ...");
})

//Cria rota 2:
router.get('/rota2', (req, res) => {
    res.send("Texto vindo da rota 2 ...");
})

//Exportação:
module.exports = router;