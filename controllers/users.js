const sendAllUsers = async (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.user))
}

const sendUserById = async (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.user))
}

const sendUserCreated = async (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.user))
}

const sendUserUpdated = async (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end("User updated")
}

const sendUsersDeleted = async (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.user))
}

const sendMe = (req, res) => {
    res.setHeader("Content-Type", "application/json")
    req.end(JSON.stringify(req.user))
}

module.exports = {
sendAllUsers,
sendUserById,
sendUserCreated,
sendUserUpdated,
sendUsersDeleted,
sendMe
}