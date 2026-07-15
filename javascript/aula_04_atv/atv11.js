let filmes = [ 
    
    {titulo: "Drive" , ano: "2016", genero:"ação", ditero:"paplo marsal" },
    {titulo: "taxi-driver" , ano: "2006", genero:"drama", ditero:"mc brinquedo" },
    {titulo: "blade runner" , ano: "2018", genero:"ação", ditero:"soso careca" },

]

filmes.forEach(function(filme){
    console.log(`Filme: ${filme.titulo} Diretor ${filmes.diretor} Lançamento: ${filme.ano} Gênero: ${filme.genero}`)
})