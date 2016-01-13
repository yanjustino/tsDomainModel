const url = require('url');

class ControllerHandler {

    public static Redirect(routes: any, request: any, response: any): void {
        var pathRoutes = url.parse(request.url, true).pathname;
        var controller = this.FindController(routes, pathRoutes)

        try {
            controller.action(request, response);
        } catch (error) {
            this.InternalErrorServerMessage(error, response);
        }
    }

    private static FindController(routes: any, path: string): any {
        var controller = null;

        routes.forEach((route) => {
            if (route.route == path) controller = route;
        });

        return controller == null ? this.ContentNotFoundMessage() : controller;
    }

    private static ContentNotFoundMessage(): any {
        return
        {
            action: (request, response) => {
                response.writeHead(404, { 'Content-Type': 'text/plain' });
                response.end('Not Found');
            }
        }
    }

    private static InternalErrorServerMessage(error, response) {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Not Found');
    }
}

export = ControllerHandler;