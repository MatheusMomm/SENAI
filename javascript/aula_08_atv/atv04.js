let produtos = [{nome: 'Mouse', preco: 50},
                {nome: 'Teclado', preco: 120},
                {nome: 'Monitor', preco: 800}]

let nomes = produtos.map(function(n) {
  return n.nome;
});

console.log(nomes)