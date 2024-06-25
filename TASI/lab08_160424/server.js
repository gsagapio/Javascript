//Importação:
const app = require('./app');

//Utilizando 'variables.env':
require('dotenv').config({path:'variables.env'})

//Configuração do Server:
app.set('port', process.env.PORT || 1234);
const server = app.listen(app.get('port'), () => {
    console.log("[OK] Servidor PORT: " + server.address().port);
}) 

