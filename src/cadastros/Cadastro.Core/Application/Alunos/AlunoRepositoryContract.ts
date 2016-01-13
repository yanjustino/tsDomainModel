import Aluno = require('../../Domain/Alunos/Aluno')

interface AlunoRepositoryContract {
    /** 
     * Create a new Aluno
     * @param {Aluno} model - represents a model Aluno
     */
    create(model: Aluno): void;
    
    /** 
     * Get All Aluno Records
    */
    getAll(): Array<Aluno>;
}

export = AlunoRepositoryContract