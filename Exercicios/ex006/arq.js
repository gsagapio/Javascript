function calcular() {
    let compra = Number(document.querySelector('input#icompra').value)
    let pago = Number(document.querySelector('input#ipago').value)
    let troco = pago - compra

    if (compra == pago){
        res.innerHTML = `Não há troco, valor pago correto.`
    } else{
        res.innerHTML = `O valor da comora foi de R$${compra.toFixed(2)} e o valor pago foi de R$${pago.toFixed(2)}. Portanto, o troco será de R$${troco.toFixed(2)}`
    }
}