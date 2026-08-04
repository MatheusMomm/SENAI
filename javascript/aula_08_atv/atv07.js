let numeros = [5, 12, 8, 21, 3, 15, 7]

let pares = numeros.filter(function(n){
    return n %2 == 0
})

console.log (pares)