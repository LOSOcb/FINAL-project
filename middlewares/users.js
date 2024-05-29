const users = require("../models/users")

const findAllUsers = async (req, res, next) => {
    req.gamesArray = await users.find({})
    next()
}

module.exports = findAllUsers