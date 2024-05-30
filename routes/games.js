const gamesRouter = require('express').Router()

const {
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaible,
    findGameById,
    createGame,
    checkIfUsersAreSafe,
    updateGame,
    deleteGame,
    checkEmptyFields
}  = require("../middlewares/games")
const {
    sendAllGames,
sendGameById,
sendGameCreated,
sendGameUpdated,
sendGameDeleted
} = require("../controllers/games")
const { checkAuth } = require('../middlewares/auth')

gamesRouter.get('/games', findAllGames, sendAllGames)
gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaible,
    checkEmptyFields,
    checkAuth,
    createGame,
    sendGameCreated
)
gamesRouter.get("/games/:id", findGameById, sendGameById)
gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaible,
    checkEmptyFields,
    checkAuth,
    updateGame,
    sendGameUpdated
)

gamesRouter.delete("/games/:id", deletedGame,checkAuth, sendGameDeleted)

module.exports = gamesRouter