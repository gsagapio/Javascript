function enviar(){
    let num = Number(document.querySelector('input#iparimpar').value)

    if (num == 0) {
        res.innerHTML = `O NÚMERO DIGITADO É INVALIDO, TENTE NOVAMENTE.`

    } else if(num % 2 == 0) {
        res.innerHTML = `O número digitado ${num} é um número PAR.`

    } else {
        res.innerHTML = `O número digitado ${num} é um número IMPAR.`
    }
}