function enviar(){
    let num = Number(document.getElementById('inumero').value)

    if (num == 0) {
        res.innerHTML = `NÚMERO INVÁLIDO, TENTE NOVAMENTE!!!`
    } else if (num > 0){
        res.innerHTML = `O número ${num} é POSITIVO.`
    } else {
        res.innerHTML = `O número ${num} é NEGATIVO.`
    }
}