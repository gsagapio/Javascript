function fatorial(n){
    let fat = 1

    for (cont = n; cont > 1; cont--){
        fat *= cont
    }
    return fat
}

console.log(fatorial(5))