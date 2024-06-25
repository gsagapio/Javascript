function enviar(){
    let nota = parseFloat(document.getElementById('inota').value)
    
    if(nota < 6 && nota > 0){
        res.innerHTML = 'Nota F.'
    } else if (nota < 7) {
        res.innerHTML = 'Nota D.'   
    } else if (nota < 8) {
        res.innerHTML = 'Nota C.'
    } else if (nota < 9) {
        res.innerHTML = 'Nota B.'
    } else if(nota <= 10){
        res.innerHTML = 'Nota A. Parabéns! Você tirou a nota MÁXIMA!!'
    } else{
        res.innerHTML = 'NOTA INVÁLIDA, TENTE NOVAMENTE.'
    }
}