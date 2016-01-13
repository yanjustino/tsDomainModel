
import AlunoRepositoryContract = require('../Cadastro.Core/Application/Alunos/AlunoRepositoryContract')
import Aluno = require('../Cadastro.Core/Domain/Alunos/Aluno')

class AlunoRepository implements AlunoRepositoryContract {
    private alunos: Array<Aluno> = new Array();

    public create(model: Aluno): void {
        this.alunos.push(model);
    }

    public getAll(): Array<Aluno> {
        this.create(new Aluno("Pedro", 21));
        this.create(new Aluno("Maria", 25));
        this.create(new Aluno("João", 31));
        this.create(new Aluno("Ana", 41));
        
        return this.alunos;
    }
}

export = AlunoRepository;
