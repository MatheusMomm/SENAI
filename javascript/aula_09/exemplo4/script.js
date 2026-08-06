let display = document.querySelector(".display");
let btnMais = document.querySelector(".btnMais");
let btnMenos = document.querySelector(".btnMenos");

let contador = 0;

btnMais.addEventListener("click", function(){
    contador++;
    display.textContent = contador;
});

btnMenos.addEventListener("click", function(){
    contador--;
    display.textContent = contador;
});