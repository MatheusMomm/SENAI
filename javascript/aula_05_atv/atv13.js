 let status = 'entregue'

 switch (status){
    case "pendente":
        console.log("pagamento não confirmado");
        break;
    case "enviado":
        console.log("A caminho");
        break;
    case "entregue":
        console.log("Finalizado");
        break;
    default:
        console.log("erro 404");
        break;
 }