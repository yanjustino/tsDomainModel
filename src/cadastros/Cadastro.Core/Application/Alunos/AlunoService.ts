import aluno = require('../../Domain/Alunos/Aluno')

import AlunoRepository = require('./AlunoRepositoryContract')

class AlunoService {
    private alunoRepository: AlunoRepository;

    constructor(alunoRepository: AlunoRepository) {
        this.alunoRepository = alunoRepository
    }

    public NovoAluno(nome: string, idade: number): void {
        this.alunoRepository.create(new aluno(nome, idade, "document"));
    }

    public RecupararTodos(): aluno[] {
        this.NovoAluno("Yan", 36);
        this.NovoAluno("Andreia", 38);
        
        return this.alunoRepository.getAll();
    }
}

export = AlunoService;