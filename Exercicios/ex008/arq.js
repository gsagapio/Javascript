function converter(){
    let real = Number(document.getElementById('ireal').value)
    let dolar = real * 4.85
    let euro = real * 5.36
    let libra = real * 6.18
    let canad = real * 3.7
    let argen = real * 0.006
    let chile = real * 0.006

    res.innerHTML = `<p>O valor que você deseja converter é:<br>
    R$${real.toFixed(2)}.<br>
    Dolar Americano: $${dolar.toFixed(2)}.<br>
    Euro: $${euro.toFixed(2)}.<br>
    Libra Esterlina: $${libra.toFixed(2)}.<br>
    Dolar Canadense: $${canad.toFixed(2)}.<br>
    Peso Argentino: $${argen.toFixed(2)}.<br>
    Peso Chileno: $${chile.toFixed(2)}.</p>`
}