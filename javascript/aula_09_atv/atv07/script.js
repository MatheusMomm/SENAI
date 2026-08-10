btn = document.querySelector("button")
titulo = document.querySelector("#conteudo")

btn.addEventListener("click", function () {

    titulo.innerHTML = "<strong>Negrito</strong> e <em>Itálico</em> "
});