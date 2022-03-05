code = str()
x1 = 1
x2 = 4
for m in range(3):
    y1 = 1
    y2 = 4

    for i in range(x1, x2):
        code += f"""<div class="regiao">\n"""
        for x in range(x1, x2):
            for y in range(y1, y2):
               code += f"""      <div class="regiao__casa">
            {x}{y}
      </div>\n"""
        code += """</div>\n"""
        y1 += 3
        y2 += 3
    x1 += 3
    x2 += 3

with open("simples.txt", "w") as simp: simp.write(code)