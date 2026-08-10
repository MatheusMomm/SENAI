let btnAcao = document.querySelector("#btnAcao");
let infoBotao = document.querySelector("#infoBotao");

btnAcao.addEventListener("click", function () {
    let p = document.createElement("p");
    p.textContent = btnAcao.textContent;
    infoBotao.appendChild(p);
});