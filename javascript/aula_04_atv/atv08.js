let carro = {
    marca: "BMW",
    modelo: "320i"
};

console.log(carro);

carro.ano = 2024
carro.cor = "Dark blue"
carro.placa = "MPKJ-T87D"

console.log(carro)

carro.cor = "light green"
carro.ano = 2026

console.log(carro)

delete carro.placa

console.log(carro)

console.log("placa" in carro)