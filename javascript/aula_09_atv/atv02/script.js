let btnDescartar = document.querySelector(".btnDescartar")
let destaque = document.querySelector("#destaque")
let importante = document.querySelector(".importante")

btnDescartar.addEventListener("click", function(){
    destaque.textContent = importante.textContent
})
