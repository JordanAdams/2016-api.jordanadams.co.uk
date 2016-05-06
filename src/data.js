export default {
  about: {
    name: 'Jordan Adams',
    type: 'Developer',
    email: 'hi@jordanadams.co.uk',
    location: 'Huddersfield, UK',
    job: 'Developer @ XEDI Ltd (Since 2013)',
    tech: [
      'JavaScript',
      'Node.js',
      'PHP',
      'Laravel',
      'MongoDB',
      'React.js',
      'Redux',
      'HTML & CSS'
    ],
  },
  projects: [
    {
      id: 4,
      name: 'Flit (Work in Progress)',
      description: 'Tracks and visualizes realtime sentiment on Twitter.',
      type: 'Website',
      links: {
        client: 'https://github.com/JordanAdams/flit-client',
        broadcaster: 'https://github.com/JordanAdams/flit-broadcaster',
        receiver: 'https://github.com/JordanAdams/flit-receiver'
      },
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
      id: 3,
      name: 'Livecoding.tv API Wrapper',
      description: 'An unopinionated API wrapper for the Livecoding.tv REST API.',
      type: 'Package',
      links: {
        repo: 'https://github.com/JordanAdams/js-livecodingtv-api',
      },
      tech: ['JavaScript']
    },
    {
      id: 2,
      name: 'GraphQL Documentation Checker',
      description: 'Quickly finds any missing documentation in a GraphQL Schema using introspection. Performs inspections remotely, without any need to access code.',
      type: 'Command Line Tool',
      links: {
        repo: 'https://github.com/JordanAdams/graphql-doc-check',
        package: 'https://www.npmjs.com/package/graphql-doc-check'
      },
      tech: ['JavaScript']
    },
    {
      id: 1,
      name: 'WhatTodo',
      description: 'Searches all code in a directory for TODO/FIXME etc. style comments. The comments are then displayed cleanly to the user.',
      type: 'Command Line Tool',
      links: {
        repo: 'https://github.com/JordanAdams/whattodo',
        package: 'https://www.npmjs.com/package/whattodo'
      },
      tech: ['JavaScript']
    },
    {
      id: 0,
      name: 'XEDI (Employer)',
      description: 'A highly flexible EDI platform enabling supply chain for retailers and suppliers. I\'m a core developer and joined the XEDI project in it\'s infancy',
      type: 'Web Application',
      tech: ['PHP', 'MongoDB', 'Bootstrap', 'JavaScript', 'jQuery']
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
