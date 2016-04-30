
import MembrosRepositoryContract = require('../Cadastro.Core/Application/membros/MembrosRepositoryContract')
import Db = require('./data')

class MembrosRepository implements MembrosRepositoryContract {
    private membros: Array<any> = new Array();

    public getAlunos(): Array<any> {
        return Db.Data.students;
    }
    
    public getProfessores(): Array<any> {
        return Db.Data.teachers;
    }    
}

export = MembrosRepository;
