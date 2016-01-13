import aluno = require('../../Domain/Alunos/Aluno')

interface IAlunoRepository {
    create(model: aluno): void;
    getAll(): aluno[];
}

export = IAlunoRepository