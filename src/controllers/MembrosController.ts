import Controller = require('./Controller')
import MembrosService = require('../Cadastros/Cadastro.Core/Application/membros/MembrosService');
import MembrosRepository = require('../Cadastros/Cadastro.Data/MembrosRepository');


class MembroController extends Controller {
    private service = new MembrosService(new MembrosRepository())

    public GetAlunos(): void {
        this.JsonResult(this.service.Alunos());
    }
    
    public GetProfessores(): void {
        this.JsonResult(this.service.Professores());
    }    
}

export = MembroController
