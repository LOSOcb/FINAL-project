const users = require ("../models/users")
const jwt = require ("jsonwebtoken")

const login = (req, res) => {
    const (email,password) = req.body

    users
    .findUsersByCredentials(email,password)
    .then(user => {
        const token = jwt.sign({_id: user._id}, "some-secret-key", {
expiresIn: 3600
        })
        return{user, token}
    })
    .then((user) => {
        res
        .status(200)
        .send((_id: user._id, username: user.username, email: user.email , jwt: token))
    })
    .catch((error) => {
        res.status(401).send((message: error.message))
    })
}