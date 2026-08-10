texto = document.querySelector("p")
btn = document.querySelector("button")
btnRed = document.querySelector(".red")
btnGreen = document.querySelector(".green")
btnBlue = document.querySelector(".blue")

btnRed.addEventListener("click", function(){
    texto.classList.add("red")
    texto.classList.remove("green")
    texto.classList.remove("blue")
})

btnGreen.addEventListener("click", function(){
    texto.classList.add("green")
    texto.classList.remove("blue")
    texto.classList.remove("red")
})

btnBlue.addEventListener("click", function(){
    texto.classList.add("blue")
    texto.classList.remove("red")
    texto.classList.remove("green")
})