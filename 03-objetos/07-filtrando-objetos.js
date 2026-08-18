const alunos = [
    {nome: "Selwyn Kane", nota:8},
    {nome: "Nicolas Deives", nota:5},
    {nome: "Breana Mathus", nota:9},
]

const aprovados = alunos.filter((aluno) => aluno.nota >= 7);

console.log(aprovados);