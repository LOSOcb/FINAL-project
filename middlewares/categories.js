const categories = require("../models/categories")

const findAllCategories = async (req, res, next) => {
    console.log("GET /categories")
    try{
        req.category = await categories.findById(req.params.id)
        next()
    } catch(err) {
        res.status(404).send({ message: "Category not found"})
    }

}
module.exports = findAllCategories