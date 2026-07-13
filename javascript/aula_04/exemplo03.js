let celular = {

    modelo: 13,
    marca: "iphone",
    ano: "2024",
    cor: "preto",
};

for (let chave in celular){
     console.log(`${chave}: ${celular[chave]}`);
}