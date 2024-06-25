// ******************************************************************* 
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro         
// Analise e Desenvolvimento de Sistemas - Terceiro Semestre    
// Disciplina: Top. Avançados de SI - I                         
// Autor: Gustavo Silva Agapio - Data: 10/05/2024 - RGM: 34730753    
// Descrição: Projeto 1: Script com funções para montar pizza, conversando com
//HTML criado nessa mesma pasta                      
// *******************************************************************

document.addEventListener('DOMContentLoaded', function () {

    function montarPizza() {

        let custo = 0;
        let extra = "";
        let opcionais = "";

        //Obtendo o tamanho selecionado:
        let tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked');
        let tamanho = tamanhoSelecionado ? tamanhoSelecionado.value : "---";

        //Obtendo o Sabor selecionado:
        let saborSelecionado = document.querySelector('input[name="sabor"]:checked');
        let sabor = saborSelecionado ? saborSelecionado.value : 'Sabor não selecionado';

        //Obtendo a borda selecionada:
        let bordaSelecionado = document.querySelector('input[name="borda"]:checked');
        let borda = bordaSelecionado ? bordaSelecionado.value : "---";

        //---------------------------------------------------------------------------------

        //Ingredientes Adicionais
        let queijoExtraCheckbox = document.querySelector('input[name="extra-queijo"]:checked');
        if (queijoExtraCheckbox) {
            custo += 2.00;
            extra += "<br>    - Queijo";
        }
        let cheddarExtraCheckbox = document.querySelector('input[name="extra-cheddar"]:checked');
        if (cheddarExtraCheckbox) {
            custo += 4.00;
            extra += "<br>    - Cheddar";
        }
        let baconExtraCheckbox = document.querySelector('input[name="extra-bacon"]:checked');
        if (baconExtraCheckbox) {
            custo += 3.00;
            extra += "<br>    - Bacon";
        }
        let pepperoniExtraCheckbox = document.querySelector('input[name="extra-pepperoni"]:checked');
        if (pepperoniExtraCheckbox) {
            custo += 5.00;
            extra += "<br>    - Pepperoni";
        }

        //Ingredientes Opcionais
        let oreganoExtraCheckbox = document.querySelector('input[name="opcionais-oregano"]:checked');
        if (oreganoExtraCheckbox) {
            opcionais += "<br>    - Oregano";
        }
        let azeitonaExtraCheckbox = document.querySelector('input[name="opcionais-azeitona"]:checked');
        if (azeitonaExtraCheckbox) {
            opcionais += "<br>    - Azeitona";
        }
        let azeiteExtraCheckbox = document.querySelector('input[name="opcionais-azeite"]:checked');
        if (azeiteExtraCheckbox) {
            opcionais += "<br>    - Azeite";
        }
        let pimentaExtraCheckbox = document.querySelector('input[name="opcionais-pimenta"]:checked');
        if (pimentaExtraCheckbox) {
            opcionais += "<br>    - Pimenta";
        }
        let tomateExtraCheckbox = document.querySelector('input[name="opcionais-tomate"]:checked');
        if (tomateExtraCheckbox) {
            opcionais += "<br>    - Tomate";
        }

        //Apresentação do Resultado:
        let totalPedidoElement = document.getElementById("total-pedido");
        totalPedidoElement.textContent = "R$: " + custo.toFixed(2);

        let descricaoPedidoElement = document.getElementById("descricao-pedido");
        descricaoPedidoElement.innerHTML = "Sabor: " + sabor + "<br>" +
            "Tamanho: " + tamanho + "<br>" +
            "Borda: " + borda + "<br>" +
            "Extras: " + extra + "<br><br>" +
            "Opcionais: " + opcionais + "<br><br>";

    }

    //Chama a função montarPizza ao clicar:
    const button = document.querySelector('button');
    button.addEventListener('click', montarPizza);
});