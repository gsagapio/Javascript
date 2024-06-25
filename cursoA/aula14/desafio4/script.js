function contar() {
    let numInput = document.getElementById('txtn');
    let tableSelect = document.getElementById('seltab');

    // Verifica se o campo está vazio ou não é um número
    if (numInput.value.trim() === '' || isNaN(numInput.value)) {
        window.alert('Por favor, digite um número válido.');
    } else {
        let n = Number(numInput.value);
        let c = 1;

        // Limpa a tabela antes de criar uma nova
        tableSelect.innerHTML = '';

        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            item.value = `tab${c}`;
            tableSelect.appendChild(item);
            c++;
        }
    }
}
