let filmes = [ 
    
    {titulo: "Drive" , ano: "2016", genero:"ação" },
    {titulo: "taxi-driver" , ano: "2006", genero:"drama" },
    {titulo: "blade runner" , ano: "2018", genero:"ação" },

]

filmes.forEach(function(filme){
    console.log(`Filme: ${filme.titulo} Lançamento: ${filme.ano} Gênero: ${filme.genero}`)
})


console.log(Object.keys(filmes))

console.log(Object.values(filmes))