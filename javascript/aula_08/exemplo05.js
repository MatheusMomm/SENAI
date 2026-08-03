let numeros = [3, 7, 12, 9, 5];

let encontrado = numeros.find(function(n) {
  return n > 10;
});
console.log(encontrado); 


let inexistente = numeros.find(function(n) {
  return n > 100;
});
console.log(inexistente); 