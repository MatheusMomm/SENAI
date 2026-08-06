const titulo = document.querySelector(".titulo")
const btnAdd = document.querySelector(".btnAdd")
const lista = document.querySelector(".lista")

btnAdd.addEventListener("click", function(){
    const li = document.createElement("li")
    li.textContent = "mais um item foi adicionado..."
    lista.appendChild(li)
})