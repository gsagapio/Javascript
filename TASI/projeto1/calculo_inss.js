// ******************************************************************* 
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro         
// Analise e Desenvolvimento de Sistemas - Terceiro Semestre    
// Disciplina: Top. Avançados de SI - I                         
// Autor: Gustavo Silva Agapio - Data: 10/05/2024 - RGM: 34730753    
// Descrição: Projeto 1: Script que retorna o calculo do INSS                        
// *******************************************************************

function calcularDescontoINSS(salario) {
    let desconto;

    if (salario <= 1412.00) {
        desconto = salario * 0.075;
    } else if (salario <= 2666.68) {
        desconto = (salario - 1412.00) * 0.09 + 105.9;
    } else if (salario <= 4000.03) {
        desconto = (salario - 2666.68) * 0.12 + 105.9 + 112.92;
    } else if (salario <= 7786.02) {
        desconto = (salario - 4000.03) * 0.14 + 105.9 + 112.92 + 333.32;
    } else {
        desconto = 713.09;
    }

    return desconto.toFixed(2);
}

module.exports = calcularDescontoINSS;
