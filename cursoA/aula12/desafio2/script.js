function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var res = window.document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'Homem';

            if (idade >= 0 && idade < 14) {
                img.setAttribute('src', 'hcrianca.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'hjovem.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'hadulto.jpg');
            } else {
                img.setAttribute('src', 'hidoso.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';

            if (idade >= 0 && idade < 14) {
                img.setAttribute('src', 'mcrianca.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'mjovem.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'madulto.jpg');
            } else {
                img.setAttribute('src', 'midosa.jpg');
            }
        }

        = res.innerHTML `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}