frases = document.querySelectorAll("h1")
btn = document.querySelector("button")
listaFrases = document.querySelector("#listaFrases")


btn.addEventListener("click", function(){
    frases.forEach(function(p){
        let frase = document.createElement("li")
        frase.textContent = p.textContent
        listaFrases.appendChild(frase)
    })
})