function calcular(){
    let valor = Number(document.getElementById('ivalor').value)
    let taxa = Number(document.getElementById('itaxa').value)
    let total = (valor / 100) * taxa + valor
    res.innerHTML = `O valor inicial foi de R$${valor.toFixed(2)}, a taxa de acrescimo foi de ${taxa.toFixed(1)}%.
    Portanto, o valor total a ser pago é de R$${total.toFixed(2)}.`
}
