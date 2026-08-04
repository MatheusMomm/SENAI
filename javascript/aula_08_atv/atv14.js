let valores = [10, 25, 8, 42, 15, 3, 30];

let filtro = valores.filter(function(u) {
  return u > 15
});

valor = filtro.map(function(n){
    return n*3
})

console.log(valor)