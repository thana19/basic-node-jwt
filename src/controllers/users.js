const userModel = require('../models/Users/Users')

const getUsers = async (request, reply) => {
    const users = await userModel.getUsers()
    reply.send(users)
}

const getUserById = async (request, reply) => {
    const { userId } = request.params

    const user = await userModel.getUserById(userId)

    reply.send(user)
}

const postUser = async (request, reply) => {
    const { body } = request
    const user = await userModel.createNewUser(body)
    reply.send(user)
}

const patchUser = async (request, reply) => {
    const {
        userId,
        name,
        surname
    } = request.body

    const updatedUser = await userModel.updateUserById(userId , {
        name,
        surname
    })
 
    reply.send(updatedUser)
}

const deleteUser = async (request, reply) => {
    const { userId } = request.body

    const result = await userModel.deleteUserById(userId)

    reply.send(result)
}

const postUserLogin = async (request, reply) => {
    const { username, password } = request.body

    await userModel.loginUser(username, password)

    return 'Logged In'
}

module.exports = {
    getUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser,
    postUserLogin
}
