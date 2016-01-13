/// <reference path="_all" />
var routes = require('./Routes');
var http = require('http');
var hostname = '127.0.0.1';
var port = 1337;
var server = http.createServer(function (request, response) {
    routes.Redirect(request, response);
});
server.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
