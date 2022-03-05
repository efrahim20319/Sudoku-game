//Tratamento de repetidos
function filtrarRepetidos(repetidos) {
    let repetidosF = []
    for (let i = 0; i < repetidos.length; i++) {
        for (let j = i; j < repetidos.length; j++) {
            if (i == j) continue
            if (!(repetidos[i]) || !(repetidos[j])) continue
            if (repetidos[i].textContent == repetidos[j].textContent)
                delete repetidos[j]
        }
    }
    repetidos.forEach(function (element) {
        if ((element) != undefined)
            repetidosF.push(element)
    })
    return repetidosF
}

function retornarRepetidosAll(grupo) {
    let repetidos = []
    grupo.forEach(casa => {
        if (estaNaClasse(casa, "repetido") || estaNaClasse(casa, "repetidoOriginal"))
            repetidos.push(casa)
    })
    return repetidos
}

function ObterParRepetido(grupo) {
    let repetidos = retornarRepetidosAll(grupo)
    let repetidosF = filtrarRepetidos(repetidos)
    let pares = []
    for (const repetido of repetidosF) {
        for (const item of grupo) {
            if (repetido == item) continue
            let possuiAClasse = (estaNaClasse(item, "repetido") || estaNaClasse(item, "repetidoOriginal"))
            let numeroEhIgual = (repetido.textContent == item.textContent)
            if (possuiAClasse && numeroEhIgual) {
                pares.push([repetido, item])
            }
        }
    }
    return pares
}

function desmarcarRepetidos(grupo, paresRepetidos) {
    for (const item of grupo) {
        item.classList.remove("repetido", "repetidoOriginal")
    }
    for (const pares of paresRepetidos) {
        for (const par of pares) {
            if (estaNaClasse(par, "numeroAdicionado"))
                par.classList.add("repetido")
            else
                par.classList.add("repetidoOriginal")
        }
    }
}

