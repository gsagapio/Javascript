document.addEventListener('DOMContentLoaded', function(){

    function montarPizza(){
        let custo = 0;
        let extra = ""; // Inicializar a variável extra para evitar erros
        
        // ------------------------------- Tipo RADIO --------------------------------
        // Obtendo sabor selecionado
        let saborSelecionado = document.querySelector('input[name="sabor"]:checked');
        let sabor = saborSelecionado ? saborSelecionado.value : "não selecionado";

        // Obtendo o tamanho selecionado
        let tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked');
        let tamanho = tamanhoSelecionado ? tamanhoSelecionado.value : "não selecionado";

        // Obtendo a borda selecionada
        let bordaSelecionada = document.querySelector('input[name="borda"]:checked');
        let borda = bordaSelecionada ? bordaSelecionada.value : "não selecionado";

        // ------------------------------ Tipo Checkbox -------------------------------
        // Ingredientes adicionais
        let queijoExtraCheckBox = document.querySelector('input[name="extra-queijo"]:checked');
        if(queijoExtraCheckBox){
            custo += 2.00;
            extra += "<br>    - Queijo";
        }
        
        // Apresentação do resultado:
        let totalPedidoElement = document.getElementById("total-pedido");
        totalPedidoElement.textContent = "R$ " + custo.toFixed(2); // Removido ":" e espaço extra

        let descricaoPedidoElement = document.getElementById("descricao-pedido");
        descricaoPedidoElement.innerHTML = "Sabor: " + sabor + "<br>" + 
                                            "Tamanho: " + tamanho + "<br>" +
                                            "Borda: " + borda + "<br>" +
                                            "Extras: " + extra + "<br><br>";
    }

    // Chama a função montarPizza ao clicar:
    const button = document.querySelector('button');
    button.addEventListener('click', montarPizza);

});
