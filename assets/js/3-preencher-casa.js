let botoes = document.querySelectorAll(".botao")

function numeroDeOcorrencias(numero) {
    let numeroDeOcorrencias = 0;
    casas.forEach(casa => {
        if (casa.textContent == numero)
            numeroDeOcorrencias++
    })
    return numeroDeOcorrencias
}

function validarBotoes() {
    botoes.forEach(botao => {
        function desativarBotao() {
            botao.setAttribute("disabled", "")
        }

        function ativarBotao() {
            botao.removeAttribute("disabled")
        }
        let botaoNumero = botao.textContent
        let ocorrencias = numeroDeOcorrencias(botaoNumero)
        if (ocorrencias < 9)
            ativarBotao()
        else
            desativarBotao()
    })
}

botoes.forEach(botao => {
    function preencher() {
        try {
            desmarcarNumerosIguais()
            let casaSelecionada = document.querySelector(".selecionado")
            if (!(casaSelecionada))
                casaSelecionada = document.querySelector(".repetidoSelecionado")
            let possuiN_Adicionado = estaNaClasse(casaSelecionada, "numeroAdicionado")
            if (casaSelecionada.textContent in [..." 123456789"] && !possuiN_Adicionado)
                return
            casaSelecionada.textContent = botao.textContent
            casaSelecionada.classList.add("numeroAdicionado")
            validarBotoes()
            marcarNumerosIguais(casaSelecionada)
        } catch (TypeError) {
            alert("Selecione uma casa para preenche-la")
        }
    }
    botao.addEventListener("click", preencher)
})