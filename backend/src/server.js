const express = require("express")
const server = express()
const cors = require("cors")
const authRoute = require("./routes/authRoute")

server.use(express.json())
server.use(cors())


server.use("/rep-api/auth", authRoute)

server.listen(5000, () => {
    console.log("Rodando na porta 5000")
})

