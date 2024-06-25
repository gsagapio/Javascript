var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora}hs.`)

if (hora < 6) {
    console.log('Boa madrugada, colega!')

} else if(hora >= 6 && hora < 12){
    console.log('Bom dia, colega!')

} else if(hora < 18){
    console.log('Boa tarde, colega!')

} else if (hora >= 18  && hora < 24){
    console.log('Boa noite, colega!')

}