// ******************************************************************* 
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro         
// Analise e Desenvolvimento de Sistemas - Terceiro Semestre    
// Disciplina: Top. Avançados de SI - I                         
// Autor: Gustavo Silva Agapio - Data: 10/05/2024 - RGM: 34730753    
// Descrição: Projeto 1: Script que retorna o calculo do dolar                        
// *******************************************************************

function converterDolarParaReal(dolar, valor) {
    const convertido = dolar * valor;
    return convertido.toFixed(2);
}

module.exports = converterDolarParaReal;
