/// <reference path="_all.ts" />

import routes = require('./Routes');

const http = require('http');
const hostname = '127.0.0.1';
const port = 1337;

var server = http.createServer((request, response) => {
  routes.Redirect(request, response);
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});