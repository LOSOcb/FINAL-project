const usersRouter = require('express').Router()

const {
findAllUsers,
findUsersById,
createUser,
updateUser,
deleteUser,
checkIsUserExists,
checkEmptyNameAndEmail,
checkEmptyNameAndEmailAndPassword,
hashPassword
} = require("../middlewares/users")
const {
    sendAllUsers,
    sendUserById,
    sendUserCreated,
    sendUserUpdated,
    sendUserDeleted,
} = require("../controllers/users")
const { checkAuth } = require('../middlewares/auth')

usersRouter.get('/users', findAllUsers, sendAllUsers)
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkAuth,
    hashPassword,
    createUser,
    sendUserCreated
)
usersRouter.get("/users/:id", findUsersById, sendUserById)
usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
)
usersRouter.delete("/users/:id", deleteUser,checkAuth, sendUserDeleted)
usersRouter.get("/me", checkAuth, sendMe)

module.exports = usersRouter