const notaUm = 5
const notaDois = 6
const notaTres = 7

const media = (notaUm + notaDois + notaTres) / 3

console.log(`A sua media é`, media.toFixed(2))

if(media >= 7){
    console.log(`Você foi aprovado com a média ${media}.`)
} else if(media >= 5 && media < 7) {
    console.log(`Você está de recuperação com a média ${media}.`)
} else{
    console.log(`Você foi reprovado com a média ${media}.`)
}