let amigo = {nome: 'José', 
sexo: 'M', 
peso: 72.3,
engordar(p = 0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(typeof amigo)