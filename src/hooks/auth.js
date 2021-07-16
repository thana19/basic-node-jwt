const jwt = require ('jsonwebtoken')
const config = require('../config')

const validateToken = async (request, reply) => {
    const { authorization } = request.headers

    if (!authorization) {
        throw new Error('missing authorization in headers')
    }

    const token = authorization.split(' ')[1]

    await jwt.verify(token, config.secretKey)
}

module.exports = {
    validateToken
}