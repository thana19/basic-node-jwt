const bcrypt = require('bcrypt')
const Users = require('./schema')

const generatePassword = async (password) => {
    const setRounds = 10
    const salt = await bcrypt.genSalt(setRounds)
    const passwordHashed = await bcrypt.hash(password, salt)

    return passwordHashed
}

const createNewUser = async (doc = {}) => {
    const insertDoc = { ...doc}

    insertDoc.password = await generatePassword(doc.password) 

    const newUser = new Users(insertDoc)

    return await newUser.save()
}

const getUsers = async () => {
    const users = await Users.find().lean()

    return users
}

const getUserById = async (userId) => {
    const user = await Users.findById(userId)

    return user
}

const updateUserById = async (userId, doc) => {
    const updateduser = await Users.updateOne({
        _id: userId
    }, doc, {
        returnOriginal: false
    })

    return updateduser
}

const deleteUserById = async (userId) => {
    const deletedUser = await Users.remove({
        _id: userId
    })

    return deletedUser
}

module.exports = {
    createNewUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById
}