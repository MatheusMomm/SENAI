let compras = []


compras.push("doritos");
compras.push("monster");
compras.push("lacta");
compras.push("fandangos");
compras.push("farofa");

compras.forEach(function(item){
    console.log(`${compras.indexOf(item) + 1 } - ${item}`)
});

console.log( `tem arroz? ${compras.includes("arroz")}`);

let removido = compras.pop();

console.log(`Item removido: ${removido}`);

compras.forEach(function(item){
    console.log(`${compras.indexOf(item) + 1 } - ${item} `)
});

console.log(`total = ${compras.length}`)