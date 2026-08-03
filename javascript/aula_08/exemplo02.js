let alunos = [
  { nome: 'Ana', nota: 8 },
  { nome: 'Bruno', nota: 6 }
];

let nomes = alunos.map(function(aluno) {
  return aluno.nome;
});
console.log(nomes);