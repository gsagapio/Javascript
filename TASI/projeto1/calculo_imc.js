// ******************************************************************* 
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro         
// Analise e Desenvolvimento de Sistemas - Terceiro Semestre    
// Disciplina: Top. Avançados de SI - I                         
// Autor: Gustavo Silva Agapio - Data: 10/05/2024 - RGM: 34730753    
// Descrição: Projeto 1: Script que retorna o calculo do IMC                        
// *******************************************************************

function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    const classificacao = getClassificacaoIMC(imc);
    return { imc: imc.toFixed(2), classificacao };
}

function getClassificacaoIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc < 24.9) {
        return 'Peso normal';
    } else if (imc < 29.9) {
        return 'Sobrepeso';
    } else if (imc < 34.9) {
        return 'Obesidade Grau I';
    } else if (imc < 39.9) {
        return 'Obesidade Grau II (severa)';
    } else {
        return 'Obesidade Grau III (mórbida)';
    }
}

module.exports = calcularIMC;
