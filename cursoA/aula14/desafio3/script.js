function contar() {
    var res = window.document.querySelector('div#res');
    var inicio = Number(window.document.getElementById('inicio').value);
    var fim = Number(window.document.getElementById('fim').value);
    var passo = Number(window.document.getElementById('passo').value);
    var cont = inicio;
    var resultado = '';

    if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || inicio === '' || fim === '' || passo === '') {
        window.alert('FALTAM DADOS OU DADOS INVÁLIDOS!');
        return; // Evita a execução do restante do código se faltarem dados ou se os dados forem inválidos
    }

    if (inicio < fim) {
        res.innerHTML = 'Contando...';

        while (cont <= fim) {
            resultado += `Passo ${cont} &#x1F449; `;
            cont += passo;
        }
    } else {
        for (cont = inicio; cont >= fim; cont -= passo) {
            resultado += `${cont} &#x1F449; `;
        }
    }
    res.innerHTML = resultado;
}
