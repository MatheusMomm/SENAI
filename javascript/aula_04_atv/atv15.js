let bibloteca = [
    {titulo: "a morte de chipamzine",autor: "brii brii patapim",paginas: 67, lido:true,},
    {titulo: "A virada de chave",autor: "Mrs Jackson",paginas: 233, lido:false,},
    {titulo: "silencio",autor: "Pablo gray",paginas: 147, lido:true,},
    {titulo: "estrada londa",autor: "Derick Greem",paginas: 93, lido:true,},
    {titulo: "palavra final",autor: "Solois Patrick",paginas: 173, lido:false,},

]

bibloteca.forEach(function(livro){
    console.log(`Título: ${livro.titulo} - Autor: ${livro.autor}`)
})

console.log(Object.keys(bibloteca[0]))

for (let chave in bibloteca[0]) {
 console.log(`${chave} - ${bibloteca[0][chave]}`)
 ;}

 console.log("editora" in bibloteca)


bibloteca[0].editora = "mappa"
bibloteca[1].editora = "panini"
bibloteca[2].editora = "castor"
bibloteca[3].editora = "trator"
bibloteca[4].editora = "mappa"

console.log(bibloteca)