import ControllerHandler = require('./ControllerHandler');

namespace DomainModelTs.Application {
    export class Routes {
        public static Redirect(request: any, response: any): void {
            var routes = [
                {
                    route: "/alunos/",
                    action: (request, response) => {
                        var controller = require('./controllers/AlunoController');
                        new controller(request, response).index()
                    }
                }
            ];

            ControllerHandler.Redirect(routes, request, response);
        }
    }
}

export = DomainModelTs.Application.Routes