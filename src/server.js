import hapi from 'hapi'
import routes from './routes'
import addCorsHeaders from 'hapi-cors-headers'

const server = new hapi.Server()
server.connection({
  port: process.env.PORT || 3000,
  routes: {
    cors: true
  }
})

server.ext('onPreResponse', addCorsHeaders)

routes.forEach(route => server.route(route))

server.start(() => console.log(`API listening at ${server.info.uri}`))
