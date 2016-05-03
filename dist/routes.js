'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var link = function link(endpoint) {
  return '' + _config2.default.baseUrl + endpoint;
};

exports.default = [{
  method: 'GET',
  path: '/',
  handler: function handler(request, reply) {
    return reply({
      data: _data2.default.about,
      links: {
        'self': link('/'),
        'projects': link('/projects'),
        'profiles': link('/profiles'),
        'stats': link('/stats')
      }
    });
  }
}, {
  method: 'GET',
  path: '/projects',
  handler: function handler(request, reply) {
    return reply({
      data: _data2.default.projects,
      links: {
        self: link('/projects'),
        root: link('/')
      }
    });
  }
}, {
  method: 'GET',
  path: '/profiles',
  handler: function handler(request, reply) {
    return reply({
      data: _data2.default.profiles,
      links: {
        self: link('/profiles'),
        root: link('/')
      }
    });
  }
}, {
  method: 'GET',
  path: '/stats',
  handler: function handler(request, reply) {
    return reply({
      data: {},
      links: {
        self: link('/stats'),
        root: link('/')
      }
    });
  }
}];