const mongoose = require ("mongoose")

 const  gamesSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    developer: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
 })

 const games = mongoose.model("games",  gamesSchema   )
 module.exports = games