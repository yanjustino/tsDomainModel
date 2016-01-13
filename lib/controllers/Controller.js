var Controller = (function () {
    function Controller(request, response) {
        this.request = request;
        this.response = response;
    }
    Controller.prototype.JsonResult = function (objetResult) {
        this.response.writeHead(200, { 'Content-Type': 'application/json' });
        this.response.end(JSON.stringify(objetResult));
    };
    return Controller;
})();
module.exports = Controller;
