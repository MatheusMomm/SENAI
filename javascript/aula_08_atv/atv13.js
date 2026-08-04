let frutas = ['maçã', 'banana', 'laranja', 'uva'];

let produto = frutas.find(function(u) {
  return u.startsWith("l");
});

console.log(produto);
