var lista = [];

function adicionar() {
    var num = Number(document.getElementById('inumero').value);

    if (!isNaN(num)) {
        if (!lista.includes(num)) {
            lista.push(num);
            atualizarExibicao();
        } else {
            alert("Este número já foi adicionado!");
        }
    } else {
        alert("Por favor, digite um número válido.");
    }
    document.getElementById('inumero').value = '';
}

function finalizar() {
    lista.sort(function (a, b) {
        return a - b;
    });

    atualizarExibicao();
}

function atualizarExibicao() {
    var res = document.getElementById('res');
    res.innerHTML = "Números únicos: " + lista.join(', ');
}