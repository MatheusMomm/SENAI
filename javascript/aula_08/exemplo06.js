let produtos = [
  { id: 1, nome: 'Mouse' },
  { id: 2, nome: 'Teclado' }
];
let produto = produtos.find(function(p) {
  return p.id === 2;
});
console.log(produto);