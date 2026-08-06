let titulo = document.querySelector('h1')
let btn = document.querySelector('.btn')
let mensagem = document.querySelector('#resultado')

btn.addEventListener("click", function(){
    mensagem.textContent = titulo.textContent
})