var url = require('url');
var ControllerHandler = (function () {
    function ControllerHandler() {
    }
    ControllerHandler.Redirect = function (routes, request, response) {
        var pathRoutes = url.parse(request.url, true).pathname;
        var controller = this.FindController(routes, pathRoutes);
        try {
            controller.action(request, response);
        }
        catch (error) {
            this.InternalErrorServerMessage(error, response);
        }
    };
    ControllerHandler.FindController = function (routes, path) {
        var controller = undefined;
        routes.forEach(function (route) {
            if (route.route == path)
                controller = route;
        });
        return controller == undefined ? this.ContentNotFoundMessage() : controller;
    };
    ControllerHandler.ContentNotFoundMessage = function () {
        return;
        {
            action: (function (request, response) {
                response.writeHead(404, { 'Content-Type': 'text/plain' });
                response.end('Not Found');
            });
        }
    };
    ControllerHandler.InternalErrorServerMessage = function (error, response) {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Not Found');
    };
    return ControllerHandler;
})();
module.exports = ControllerHandler;
