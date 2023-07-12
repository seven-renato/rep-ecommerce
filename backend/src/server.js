const express = require("express")
const cors = require("cors")
const db = require('./db')

const authRoute = require("./routes/authRoute")
const emailRoute = require("./routes/emailRoute")
const productRoute = require("./routes/productRoute")

const server = express()
server.use(cors())
server.use(express.json())

server.use("/rep-api/auth", authRoute)
server.use("/rep-api/email", emailRoute)
server.use("/rep-api/product", productRoute)

db.sync().then(() => {
    server.listen(5000)
}).catch(err => console.log(err))