const express = require("express")
const cors = require("cors")

const authRoute = require("./routes/authRoute")
const emailRoute = require("./routes/emailRoute")

const server = express()
server.use(cors())
server.use(express.json())

server.use("/rep-api/auth", authRoute)
server.use("/rep-api/email", emailRoute)

server.listen(5000, () => {
    console.log("Server rodando em: http://localhost:5000")
})