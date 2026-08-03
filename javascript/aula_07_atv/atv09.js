function verificarIdade(idade){
    if (idade <12){
        return "criança"
    }
    else if (idade<18){
        return "adolecente"
    }
    else if (idade<64){
        return"adulto"
    }
    else{
        return "idoso"
    }
}

let idades = [9,15,19,32,67]

idades.forEach(function(item){
    console.log(verificarIdade(item))
})