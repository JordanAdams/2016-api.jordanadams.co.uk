export default {
  about: {
    name: 'Jordan Adams',
    type: 'Developer',
    tech: ['JavaScript', 'Node.js', 'PHP', 'MongoDB', 'HTML & CSS'],
    email: 'hi@jordanadams.co.uk',
    location: 'Huddersfield, UK',
    job: 'Developer @ XEDI Ltd'
  },
  projects: [
    {
      id: 3,
      name: 'Flit (Work in Progress)',
      description: 'Tracks and visualizes realtime sentiment on Twitter.',
      link: 'https://github.com/JordanAdams/flit-client',
      type: 'website',
      tech: [
        'JavaScript',
        'React.js',
        'Redux',
        'WebSockets',
        'Redis',
        'PostCSS'
      ]
    },
    {
      id: 2,
      name: 'Livecoding.tv API Wrapper',
      description: 'An unopinionated API wrapper for the Livecoding.tv REST API.',
      link: 'https://github.com/JordanAdams/js-livecodingtv-api',
      type: 'package',
      tech: ['JavaScript']
    },
    {
      id: 1,
      name: 'GraphQL Documentation Checker',
      description: 'Quickly finds any missing documentation in a GraphQL Schema using introspection. Performs inspections remotely, without any need to access code.',
      link: 'https://github.com/JordanAdams/graphql-doc-check',
      type: 'command line tool',
      tech: ['JavaScript']
    },
    {
      id: 0,
      name: 'WhatTodo',
      description: 'Searches all code in a directory for TODO/FIXME etc. style comments. The comments are then displayed cleanly to the user.',
      link: 'https://github.com/JordanAdams/whattodo',
      type: 'command line tool',
      tech: ['JavaScript']
    }
  ],
  profiles: {
    github: 'http://github.com/jordanadams',
    twitter: 'http://twitter.com/jordancalluma',
    facebook: 'http://facebook.com/jordancalluma',
    livecoding: 'http://livecoding.tv/jordanadams',
    npm: 'http://www.npmjs.com/~jordanadams'
  }
}
