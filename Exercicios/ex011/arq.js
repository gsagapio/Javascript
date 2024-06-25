function enviar(){
    let num1 = Number(document.getElementById('inumero1').value)
    let num2 = Number(document.getElementById('inumero2').value)

    if (num1 == num2){
        res.innerHTML = 'Números Iguais.'

    } else if(num1 > num2){
        res.innerHTML = `O numero ${num1} é o MAIOR número entre ambos.`

    } else {
        res.innerHTML = `O numero ${num2} é o MAIOR número entre ambos.`

    }  
}