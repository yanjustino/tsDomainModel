interface MembrosRepositoryContract {
    
    /** 
     * Get All Aluno Records
    */
    getAlunos(): Array<any>;
    getProfessores(): Array<any>;
}

export = MembrosRepositoryContract