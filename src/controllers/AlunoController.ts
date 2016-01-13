import Controller = require('./Controller')
import AlunoService = require('../Cadastros/Cadastro.Core/Application/Alunos/AlunoService');
import AlunoRepository = require('../Cadastros/Cadastro.Data/AlunoRepository');


class AlunoController extends Controller {
    private service = new AlunoService(new AlunoRepository())

    public index(): void {
        this.service.NovoAluno("Yan", 36);
        this.service.NovoAluno("Andreia", 38);
        
        this.JsonResult(this.service.RecupararTodos());
    }
}

export = AlunoController
