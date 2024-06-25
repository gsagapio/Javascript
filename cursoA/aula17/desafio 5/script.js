// Selecionando elementos do DOM
let numInput = document.querySelector('#fnum');
let listaSelect = document.querySelector('#flista');
let resDiv = document.querySelector('#res'); 
let valores = [];

// Adicionando evento de clique ao botão Adicionar
function adicionar() {
    let numValue = Number(numInput.value);

    if (isNumero(numValue) && !inLista(numValue, valores)) {
        valores.push(numValue);
        let option = document.createElement('option');
        option.text = `Valor ${numValue} adicionado.`;
        listaSelect.appendChild(option);
        resDiv.innerHTML = '';
    } else {
        window.alert('Valor inválido ou já encontrado na lista.');
    }

    numInput.value = '';
    numInput.focus();
}

// Verificando se o valor é um número entre 1 e 100
function isNumero(n) {
    return !isNaN(n) && n >= 1 && n <= 100;
}

// Verificando se o valor já está na lista
function inLista(n, l) {
    return l.indexOf(n) !== -1;
}

// Finalizando e exibindo resultados
function finalizar() {
    if (valores.length === 0) {
        window.alert('Adicione valores antes de finalizar!');
    } else {
        let total = valores.length;
        let maior = Math.max(...valores);
        let menor = Math.min(...valores);
        let soma = valores.reduce((acc, curr) => acc + curr, 0);
        let media = soma / total;

        resDiv.innerHTML = `<p>Ao todo temos ${total} números cadastrados.</p>`;
        resDiv.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        resDiv.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        resDiv.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`;
        resDiv.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
    }
}