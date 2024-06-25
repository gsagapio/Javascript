var idade = 67
console.log(`Você tem ${idade} anos.`)

if (idade < 16){
    console.log('Menor de 16, não pode votar.')
} else if (idade < 18 || idade > 65){
    console.log('Pode votar, mas é opcional.')
} else{
    console.log('Acima de 18, voto obrigatório.')
}