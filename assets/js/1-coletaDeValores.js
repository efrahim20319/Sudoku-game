let pos_iniciais = [
  [..."5 39   7 "],
  [..."8 261 5 9"],
  [..."6   578 1"],
  [..." 26 7 41 "],
  [..." 5  2 7 3"],
  [..."3 7 6   8"],
  [..."   7   9 "],
  [..." 69  2 57"],
  [..."  5  6  4"]
]

function estaNaClasse(elemento, classe) { //Nao conhecia ClassList.contains
  let classes = elemento.classList
  for (let item of classes) 
      if (item == classe) 
          return true
  return false
}

function obterLinhas(casas) {
  let linhas = new Array(9)
  for (let linha = 0; linha < linhas.length; linha++) {
    linhas[linha] = new Array(9)
  }
  let x1 = 0,
    x2 = 3;
  let y1, y2;

  for (let main = 0, count = 0; main < 3; main++) {
    y1 = 0, y2 = 3;
    for (let i = x1; i < x2; i++) {
      for (let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++, count++) {
          linhas[x][y] = casas[count]
          linhas[x][y].textContent = pos_iniciais[x][y]
        }
      }
      y1 += 3
      y2 += 3
    }
    x1 += 3
    x2 += 3
  }
  return linhas
}

function obterColunas(linhas) {
  let colunas = new Array(9)
  for (let coluna = 0; coluna < colunas.length; coluna++) {
    colunas[coluna] = new Array(9)
  }
  for (let i = 0; i < linhas.length; i++) {
    for (let j = 0; j < linhas.length; j++) {
      colunas[i][j] = linhas[j][i]
    }
  }
  return colunas
}

function obterRegioes() {
  let regioes1 = document.querySelectorAll(".regiao")
  let regioes2 = new Array()
  regioes1.forEach(element => {
    let aux = []
    for (const item of element.children)
      aux.push(item)
    regioes2.push(aux)
  })
  return regioes2
}