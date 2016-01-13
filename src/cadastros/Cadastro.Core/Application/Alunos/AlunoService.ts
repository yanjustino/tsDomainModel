import Aluno = require('../../Domain/Alunos/Aluno')
import AlunoRepository = require('./AlunoRepositoryContract')

/** Class representing a Aluno Services. */
class AlunoService {
    private repository: AlunoRepository;

    /**
     * @constructor
     * @param {AlunoRepositoryContract} alunoRepository - Inject a concret 
     * alunoRepository Instance
     */
    constructor(alunoRepository: AlunoRepository) {
        this.repository = alunoRepository
    }

    /**
     * Create New Aluno
     * @param {string} name - Aluno name
     * @param {number} age - Aluno age 
     */
    public Register(name: string, age: number): void {
        let aluno = new Aluno(name, age, "default");

        if (!aluno.OfAge()) {
            this.repository.create(aluno);
        }
    }

    /**
     * Get all Aluno Records
     */
    public GetAll(): Array<Aluno> {
        return this.repository.getAll();
    }
}

export = AlunoService;