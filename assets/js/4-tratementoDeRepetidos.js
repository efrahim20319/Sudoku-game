function desmarcarRepetidos(matrix) {
    for (const array of matrix) {
        for (const item of array) {
            item.classList.remove("repetido", "repetidoOriginal")
        }
    }
}

function tratarRepetidosMatrix(matrix) {
    for (const array of matrix) {
        tratarRepetidosGrupo(array)
    }
}

function tratarRepetidosGrupo(grupo) {
    procurarRepetidos(grupo)
    let repetidos = retornarRepetidos(grupo)
    marcarRepetidoOriginal(repetidos, grupo)
}

function procurarRepetidos(grupo) {
    let grupoDeNumeros = retornarNumeros(grupo)
    for (let i = 0; i < grupoDeNumeros.length; i++) {
        for (let j = i; j < grupoDeNumeros.length; j++) {
            if (i == j) continue
            if (grupoDeNumeros[i].textContent == grupoDeNumeros[j].textContent) {
                if (estaNaClasse(grupoDeNumeros[i], "numeroAdicionado")) //Mesmo que ClassList.contains("numeroAdicionado")
                    marcarRepetido(grupoDeNumeros[i])
                if (estaNaClasse(grupoDeNumeros[j], "numeroAdicionado"))
                    marcarRepetido(grupoDeNumeros[j])
            }
        }
    }
}

function retornarNumeros(grupo) {
    let numeros = []
    for (let valor of grupo) {
        if (valor.textContent in [..."1123456789"]) // 1 duplicado intencionalmente
            numeros.push(valor)
    }
    return numeros
}

function marcarRepetido(repetido) {
    repetido.classList.add("repetido")
    marcarNumerosIguais(repetido)
}

function marcarRepetidoOriginal(repetidos, grupo) {
    repetidos.forEach(repetido => {
        let numeroR = repetido.textContent
        grupo.forEach(casa => {
            let numeroC = casa.textContent
            if (numeroR == numeroC && !(estaNaClasse(casa, "numeroAdicionado"))) {
                casa.classList.add("repetidoOriginal")
            }
        })
    })
}

function retornarRepetidos(grupo) {
    let repetidos = []
    grupo.forEach(casa => {
        if (estaNaClasse(casa, "repetido"))
            repetidos.push(casa)
    })
    return repetidos
}

botoes.forEach(botao => {
    botao.addEventListener("click", function () {
        desmarcarRepetidos(linhas)
        desmarcarRepetidos(colunas)
        desmarcarRepetidos(regioes)

        tratarRepetidosMatrix(linhas)
        tratarRepetidosMatrix(colunas)
        tratarRepetidosMatrix(regioes)
    })
})