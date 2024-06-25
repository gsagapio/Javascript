import chalk from "chalk";
import fs from 'fs'

/*
//Imprime sem uso do 'chalk'
console.log("Gustavo");

//Imprime com uso do 'chalk'
console.log(chalk.red("=====Gustavo====="))
console.log(chalk.blueBright("=====Silva====="))
console.log(chalk.bgCyan.white.bold("=====Agapio====="))
console.log(chalk.green("Gustavo Silva Agapio"))
*/

function trataErro(erro){
    throw new Error(chalk.bgRedBright.white(erro.code, "Não foi encontrado o arquivo."))
}

/*Maneira 1 de ler um arquivo sem sincronismo
function pegaArquivo(caminhoArquivo){
    const encoding = 'utf-8';

    fs.readFile(caminhoArquivo, encoding, (erro, texto) => {
    if(erro){
        trataErro(erro)
    }  
    console.log(chalk.bgGreenBright.black(texto))
     
 })
}*/

/*Maneira 2 de ler um arquivo assincrono - THEN / CATCH
function pegaArquivo(caminhoArquivo){
    const encoding = 'utf-8';
    fs.promises
    .readFile(caminhoArquivo, encoding)
    .then((texto) => console.log(chalk.bgBlueBright.white(texto)))
    .catch((erro) => trataErro(erro))
}*/

//Maneira 3 de ler um arquivo assincrono - ASYNC / AWAIT
async function pegaArquivo(caminhoArquivo){
    const encoding = 'utf-8';
    try{
        const texto = await fs.promises.readFile(caminhoArquivo, encoding)
        console.log(chalk.bgCyanBright.red.bold(texto))
    }
    catch(erro){
        trataErro(erro);
    }
}

pegaArquivo('./arquivos/texto.md')