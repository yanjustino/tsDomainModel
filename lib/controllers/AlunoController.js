var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Controller = require('./Controller');
var AlunoService = require('../Cadastros/Cadastro.Core/Application/Alunos/AlunoService');
var AlunoRepository = require('../Cadastros/Cadastro.Data/AlunoRepository');
var AlunoController = (function (_super) {
    __extends(AlunoController, _super);
    function AlunoController() {
        _super.apply(this, arguments);
        this.service = new AlunoService(new AlunoRepository());
    }
    AlunoController.prototype.index = function () {
        this.service.NovoAluno("Yan", 36);
        this.service.NovoAluno("Andreia", 38);
        this.JsonResult(this.service.RecupararTodos());
    };
    return AlunoController;
})(Controller);
module.exports = AlunoController;
