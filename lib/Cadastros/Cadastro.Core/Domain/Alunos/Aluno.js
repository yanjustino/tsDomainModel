var Aluno = (function () {
    function Aluno(name, age, document) {
        this.name = name;
        this.age = age;
    }
    Aluno.prototype.IsValid = function () {
        return true;
    };
    Aluno.prototype.OfAge = function () {
        return this.age < 18;
    };
    return Aluno;
})();
module.exports = Aluno;
