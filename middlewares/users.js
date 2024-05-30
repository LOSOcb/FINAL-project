const users = require("../models/users")

const findAllUsers = async (req, res, next) => {
    console.log("GET /users")
try{
    req.user = await users.findById(req.params.id)
    next()
} catch(err) {
    res.status(404).send({ message: "Users not found"})
}
}

module.exports = findAllUsers