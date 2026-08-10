let texto = document.querySelector("h2");
let btnAnalizar = document.querySelector("button");
let analise = document.querySelector("#analise");

btnAnalizar.addEventListener("click", function () {
    analise.innerHTML += texto.textContent + "<br>";
    analise.innerHTML += texto.innerHTML + "<br>";
    analise.innerHTML += texto.style.color + "<br>";
});