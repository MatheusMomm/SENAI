let filmes = [  {titulo: 'Matrix', ano: 1999, genero: 'Ficção'},
                {titulo: 'Interestelar', ano: 2014, genero: 'Ficção'},
                {titulo: 'Titanic', ano: 1997, genero: 'Romance'},
                {titulo: 'Avatar', ano: 2009, genero: 'Ficção'},
                {titulo: 'Coringa', ano: 2019, genero: 'Drama'}]

titulos = filmes.map(function(t){
    return t.titulo
})

generoFicção = filmes.filter(function(f){
    return f.genero === "Ficção"
})

ano = filmes.find(function(a){
    return a.ano === 1997
})


let filtro = filmes.filter(function(u) {
  return u. ano > 2000
});

novo = filtro.map(function(n){
    return n.titulo
})

console.log(titulos)
console.log(generoFicção)
console.log(ano)
console.log(novo)