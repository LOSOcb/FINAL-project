const express  = require("express")
const  path = require("path")
const  bodyParser = require("body-parser")
const apiRouter = require("./database/connect")

const connectToDatabase = require("./database/connect")
const cors = require ("./middlewares/cors")
const cookieParser = require("cookie-parser")

const PORT = 3000
const app  = express()

connectToDatabase

app.use(
    cors,
    cookieParser,
    bodyParser.json(),
apiRouter,
express.static(path.join(__dirname, "public"))
)

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`)
})