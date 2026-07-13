let produto = {
    nome: "arroz",
    preço: 2.99,
    disponivel: true,
    tags: ["bom" , "saudavel", "barato"],
}

for (let chave in produto) {
     console.log(`${chave}: ${typeof produto[chave]}`)
     ;}