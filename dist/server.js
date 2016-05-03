'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _hapiCorsHeaders = require('hapi-cors-headers');

var _hapiCorsHeaders2 = _interopRequireDefault(_hapiCorsHeaders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _hapi2.default.Server();
server.connection({
  port: 3000,
  routes: {
    cors: true
  }
});

server.ext('onPreResponse', _hapiCorsHeaders2.default);

_routes2.default.forEach(function (route) {
  return server.route(route);
});

server.start(function () {
  return console.log('API listening at ' + server.info.uri);
});