const categories = require("../models/categories")

const findAllCategories = async (req, res, next) => {
    req.gamesArray = await categories.find({})
    next()
}

module.exports = findAllCategories