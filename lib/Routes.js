var ControllerHandler = require('./ControllerHandler');
var Routes = (function () {
    function Routes() {
    }
    Routes.Redirect = function (request, response) {
        var routes = [
            {
                route: "/alunos/",
                action: function (request, response) {
                    var controller = require('./controllers/AlunoController');
                    new controller(request, response).index();
                }
            }
        ];
        ControllerHandler.Redirect(routes, request, response);
    };
    return Routes;
})();
module.exports = Routes;
