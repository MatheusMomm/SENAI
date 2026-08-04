let usuarios = [{id: 1, nome: 'João'}, {id: 2, nome: 'Maria'}, {id: 3, nome: 'Pedro'}]

let produto = usuarios.find(function(u) {
  return u.id === 2;
});

console.log(produto);