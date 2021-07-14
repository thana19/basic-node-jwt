const Fastify = require('fastify')
const buildApp = (options = {}) => {
    const app = Fastify(options)

    return app
}
module.exports = buildApp