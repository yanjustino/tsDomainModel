var aluno = require('../../Domain/Alunos/Aluno');
var AlunoService = (function () {
    function AlunoService(alunoRepository) {
        this._alunoRepository = alunoRepository;
    }
    AlunoService.prototype.NovoAluno = function (nome, idade) {
        this._alunoRepository.create(new aluno(nome, idade, "document"));
    };
    AlunoService.prototype.RecupararTodos = function () {
        return this._alunoRepository.getAll();
    };
    return AlunoService;
})();
module.exports = AlunoService;
