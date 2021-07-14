const { request } = require("http")

const userRoutes = (app) => {
    app.get('/users', async (request, reply) => {
        reply.send('GET USERS')
    })
}

module.exports = {
    userRoutes
}