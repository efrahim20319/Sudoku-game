function estaConcluido(grupo) {
    let numeros = retornarNumeros(grupo)
    return numeros.length == 9
}

function AnimacaoConcluido(grupo) {
    for (let i = 0; i < grupo.length; i++) {
        setTimeout(function () {
            grupo[i].classList.add("concluido")
        }, (i * 100) - 50)
        grupo[i].classList.remove("concluido")
    }
}

botoes.forEach(function (botao) {
    botao.addEventListener("click", () => {
        let selecionado = document.querySelector(".selecionado")
        let linha = obterSuperior(selecionado, linhas)
        let coluna = obterSuperior(selecionado, colunas)
        let regiao = obterSuperior(selecionado, regioes)

        if(estaConcluido(linha))
            AnimacaoConcluido(linha)

        if (estaConcluido(coluna))
            AnimacaoConcluido(coluna)

        if (estaConcluido(regiao))
            AnimacaoConcluido(regiao)
    })
})