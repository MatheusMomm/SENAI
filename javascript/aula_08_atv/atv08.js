let palavras = ['sol', 'montanha', 'lua', 'estrela', 'mar']

let altos = palavras.filter(function(n){
    return n.length > 3
})

console.log (altos)