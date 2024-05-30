const games = require("../models/games")

const findAllGames = async (req, res, next) => {
    console.log("GET /games")
    req.gamesArray = await games.find({}).ppoppulate("categories").poppulate({
        path: "users",
        select: "-password",
    })
    next()
}

module.exports = findAllGames