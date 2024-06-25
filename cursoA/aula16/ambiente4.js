function parImpar(numero){
    if (numero % 2 == 0){
        return 'Par!'
    } else{
        return 'Impar!'
    }
}

let resultado = parImpar(4)
console.log(`O resultado do número é ${resultado}`)