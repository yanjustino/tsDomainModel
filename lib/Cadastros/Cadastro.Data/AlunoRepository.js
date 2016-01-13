var AlunoRepository = (function () {
    function AlunoRepository() {
        this.alunos = new Array();
    }
    AlunoRepository.prototype.create = function (model) {
        this.alunos.push(model);
    };
    AlunoRepository.prototype.getAll = function () {
        return this.alunos;
    };
    return AlunoRepository;
})();
module.exports = AlunoRepository;
