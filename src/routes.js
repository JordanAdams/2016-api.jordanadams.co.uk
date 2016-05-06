import data from './data'

export default [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => reply({
      data: data.about,
      links: {
        'self': '/',
        'projects': '/projects',
        'profiles': '/profiles'
        // 'stats': '/stats'
      }
    })
  },
  {
    method: 'GET',
    path: '/projects',
    handler: (request, reply) => reply({
      data: data.projects,
      links: {
        self: '/projects',
        root: '/'
      }
    })
  },
  {
    method: 'GET',
    path: '/profiles',
    handler: (request, reply) => reply({
      data: data.profiles,
      links: {
        self: '/profiles',
        root: '/'
      }
    })
  },
  {
    method: 'GET',
    path: '/stats',
    handler: (request, reply) => reply({
      data: {},
      links: {
        self: '/stats',
        root: '/'
      }
    })
  }
]
