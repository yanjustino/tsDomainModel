import aluno = require('../../Domain/Alunos/Aluno')

import alunoRepository = require('./IAlunoRepository')

class AlunoService {
    private _alunoRepository: alunoRepository;

    constructor(alunoRepository: alunoRepository) {
        this._alunoRepository = alunoRepository
    }

    public NovoAluno(nome: string, idade: number): void {
        this._alunoRepository.create(new aluno(nome, idade, "document"));
    }

    public RecupararTodos(): aluno[] {
        return this._alunoRepository.getAll();
    }
}

export = AlunoService;