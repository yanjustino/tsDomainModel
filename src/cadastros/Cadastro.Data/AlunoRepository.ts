
import IAlunoRepository = require('../Cadastro.Core/Application/Alunos/IAlunoRepository')
import Aluno = require('../Cadastro.Core/Domain/Alunos/Aluno')

class AlunoRepository implements IAlunoRepository {
    private alunos: Aluno[] = new Array();

    public create(model: Aluno): void {
        this.alunos.push(model);
    }

    public getAll(): Aluno[] {
        return this.alunos;
    }
}

export = AlunoRepository;
