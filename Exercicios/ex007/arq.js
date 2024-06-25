function resultado() {
    let nasc = Number(document.getElementById('iano').value)
    let atual = Number(document.getElementById('iatual').value)
    let real_atual = parseInt(new Date().getFullYear())

    if (atual != real_atual){
        res.innerHTML = 'ERRO NOS DADOS, PRENCHA-OS CORRETAMENTE!!'
    } else if (atual == nasc){
        res.innerHTML = 'Nasceu nesse ano que é o atual e já tá respondendo quetionário? Parabéns colega, você é um gênio!'
    } else {
        let idade = atual - nasc
        res.innerHTML = `Você completou/completará ${idade} anos. Está na flor da idade!`
    }
}