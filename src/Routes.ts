import ControllerHandler = require('./ControllerHandler');

namespace DomainModelTs.Application {
    export class Routes {
        public static Redirect(request: any, response: any): void {
            var routes = [
                {
                    route: "/membros/alunos",
                    action: (request, response) => {
                        var controller = require('./controllers/MembrosController');
                        new controller(request, response).GetAlunos()
                    }
                },
                {
                    route: "/membros/professores",
                    action: (request, response) => {
                        var controller = require('./controllers/MembrosController');
                        new controller(request, response).GetProfessores()
                    }
                }                
            ];

            ControllerHandler.Redirect(routes, request, response);
        }
    }
}

export = DomainModelTs.Application.Routes