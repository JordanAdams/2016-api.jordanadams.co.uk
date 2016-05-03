import config from './config'
import data from './data'

const link = (endpoint) => `${config.baseUrl}${endpoint}`

export default [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => reply({
      data: data.about,
      links: {
        'self': link('/'),
        'projects': link('/projects'),
        'profiles': link('/profiles'),
        'stats': link('/stats')
      }
    })
  },
  {
    method: 'GET',
    path: '/projects',
    handler: (request, reply) => reply({
      data: data.projects,
      links: {
        self: link('/projects'),
        root: link('/')
      }
    })
  },
  {
    method: 'GET',
    path: '/profiles',
    handler: (request, reply) => reply({
      data: data.profiles,
      links: {
        self: link('/profiles'),
        root: link('/')
      }
    })
  },
  {
    method: 'GET',
    path: '/stats',
    handler: (request, reply) => reply({
      data: {},
      links: {
        self: link('/stats'),
        root: link('/')
      }
    })
  }
]
