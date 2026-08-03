const soma = (a,b) => a+ b;
const menos = (a,b) => a - b;
const mult = (a,b) => a * b;
const dividir = (a,b) =>  {
    if(b === 0){
        return "erro: divisao por zero"
    }
    return a/b
};

console.log("soma", soma(10,5));
console.log("subtração", menos(10,5));
console.log("multiplicação", mult(10,5));
console.log("divição", dividir(10,5));