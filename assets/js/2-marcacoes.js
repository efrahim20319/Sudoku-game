let gradePrincipal = document.querySelector(".gradePrincipal")
let casas = document.querySelectorAll(".regiao__casa")


let regioes = obterRegioes()
let linhas = obterLinhas(casas)
let colunas = obterColunas(linhas)


function obterSuperior(elemento, matrix) {
    for (const array of matrix) {
        for (const casa of array) {
            if (elemento == casa)
                return array
        }
    }
}

function desmarcarTudo() {
    casas.forEach(casa => {
        casa.classList.remove("marcado", "numeroIgual", "selecionado", "repetidoSelecionado")
    })
}

function marcarGrupo(grupo) {
    try {
        for (let casa of grupo) {
            if (estaNaClasse(casa, "repetido" || estaNaClasse(casa, "repetidoOriginal")))
                continue
            casa.classList.add("marcado")
        };
    } catch (TypeError) {

    }
}

function marcarCasa(elemento) {
    if (estaNaClasse(elemento, "repetido") || estaNaClasse(elemento, "repetidoOriginal")) {
        elemento.classList.add("repetidoSelecionado")
        return
    }
    elemento.classList.add("selecionado")
}

function marcarNumerosIguais(elemento) {
    let numero = elemento.textContent
    if (!(numero in [..." 123456789"])) return
    for (let linha of linhas) {
        for (let casa of linha) {
            if (estaNaClasse(casa, "repetido" || estaNaClasse(casa, "repetidoOriginal")))
                continue
            if (casa.textContent == numero && casa != elemento)
                casa.classList.add("numeroIgual")
        }
    }
}

function desmarcarNumerosIguais() {
    let NumerosIguais = document.querySelectorAll(".numeroIgual")
    NumerosIguais.forEach(numero => {
        numero.classList.remove("numeroIgual")
    })
}

casas.forEach(elemento => {
    elemento.addEventListener("click", () => {
        desmarcarTudo()
        marcarCasa(elemento)
        let regiao = obterSuperior(elemento, regioes)
        let linha = obterSuperior(elemento, linhas)
        let coluna = obterSuperior(elemento, colunas)
        marcarGrupo(linha)
        marcarGrupo(coluna)
        marcarGrupo(regiao)
        marcarNumerosIguais(elemento)
    })
})