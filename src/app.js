const Fastify = require('fastify')
const routes = require('./routes')

const buildApp = (options = {}) => {
    const app = Fastify(options)

    routes.userRoutes(app)

    return app
}
module.exports = buildApp