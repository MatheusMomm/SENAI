let produtos = [{nome: 'Mouse', preco: 50},
                {nome: 'Teclado', preco: 120},
                {nome: 'Monitor', preco: 800}]
                
let altos = produtos.filter(function(n){
    return n.preco > 60
})

console.log (altos)