const lista = document.getElementById('minhaLista');
const botao = document.getElementById('btnAdicionar');
 
botao.addEventListener('click', function(){
const novoItem = document.createElement('li');
novoItem.textContent = 'Item ' + (lista.children.length + 1);
lista.appendChild(novoItem);

});