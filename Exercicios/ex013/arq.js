function calcular(){
    let num = Number(document.getElementById('isalario').value)

    if (num <= 280){
        let aumento = (num / 100) * 20
        let novo = num + aumento
        res. innerHTML = `<p>O salário anterior era de R$${num.toFixed(2)}.<br>
        O percentual de aumento é de 20%. <br>
        O valor do aumento é de R$${aumento.toFixed(2)}.<br>
        O novo salário, com o aumento é de R$${novo.toFixed(2)}.</p>`
    } else if (num <= 700){
        let aumento = (num / 100) * 15
        let novo = num + aumento
        res. innerHTML = `<p>O salário anterior era de R$${num.toFixed(2)}.<br>
        O percentual de aumento é de 15%. <br>
        O valor do aumento é de R$${aumento.toFixed(2)}.<br>
        O novo salário, com o aumento é de R$${novo.toFixed(2)}.</p>`
    } else if (num <= 1500){
        let aumento = (num / 100) * 10
        let novo = num + aumento
        res. innerHTML = `<p>O salário anterior era de R$${num.toFixed(2)}.<br>
        O percentual de aumento é de 10%. <br>
        O valor do aumento é de R$${aumento.toFixed(2)}.<br>
        O novo salário, com o aumento é de R$${novo.toFixed(2)}.</p>`
    } else if (num > 1500){
        let aumento = (num / 100) * 5
        let novo = num + aumento
        res. innerHTML = `<p>O salário anterior era de R$${num.toFixed(2)}.<br>
        O percentual de aumento é de 5%. <br>
        O valor do aumento é de R$${aumento.toFixed(2)}.<br>
        O novo salário, com o aumento é de R$${novo.toFixed(2)}.</p>`
    } else {
        res.innerHTML = `<p></p>[ERRO] SALÁRIO INVÁLIDO [ERRO]<br>
        TENTE NOVAMENTE</p>`
    }
}