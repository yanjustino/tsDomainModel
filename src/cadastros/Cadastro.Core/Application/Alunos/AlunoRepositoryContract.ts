import aluno = require('../../Domain/Alunos/Aluno')

interface AlunoRepositoryContract {
    create(model: aluno): void;
    getAll(): Array<aluno>;
}

export = AlunoRepositoryContract