let amigos = [
    {nome: "lolo",idade: 13,},
    {nome: "ph",idade: 20,},
    {nome: "arthur",idade: 16,},
    {nome: "mailon",idade: 22,},      
]

let amigos_18 = []

amigos.forEach(function(amigo) {
    console.log(`Nome: ${amigo.nome}, Idade: ${amigo.idade}`);
    if (amigo.idade > 18){
        amigos_18.push(amigo)
}});

console.log(amigos_18)