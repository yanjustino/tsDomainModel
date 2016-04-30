import MembrosRepositoryContract = require('./MembrosRepositoryContract')

/** Class representing a Aluno Services. */
class MembrosServices {
    private repository: MembrosRepositoryContract;

    /**
     * @constructor
     * @param {AlunoRepositoryContract} alunoRepository - Inject a concret 
     * alunoRepository Instance
     */
    constructor(membrosRepository: MembrosRepositoryContract) {
        this.repository = membrosRepository
    }


    /**
     * Get all Aluno Records
     */
    public Alunos(): Array<any> {
        return this.repository.getAlunos();
    }
    
    public Professores(): Array<any>{
        return this.repository.getProfessores();
    }
}

export = MembrosServices;