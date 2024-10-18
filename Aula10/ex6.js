var aluno = {
    "nome": "Ferdinando",
    "idade": 19,
    "curso": "Engenharia de computação",
    "matricula": 123456,
    
    mostrarInformacoes: function() {
        return `Nome: ${this.nome}\nIdade: ${this.idade}\nCurso: ${this.curso}\nMatricula: ${this.matricula};`
    }
};

console.log(aluno.mostrarInformacoes());