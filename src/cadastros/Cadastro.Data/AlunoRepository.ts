
import AlunoRepositoryContract = require('../Cadastro.Core/Application/Alunos/AlunoRepositoryContract')
import Aluno = require('../Cadastro.Core/Domain/Alunos/Aluno')

class AlunoRepository implements AlunoRepositoryContract {
    private alunos: Array<Aluno> = new Array();

    public create(model: Aluno): void {
        this.alunos.push(model);
    }

    public getAll(): Array<Aluno> {
        return this.alunos;
    }
}

export = AlunoRepository;
