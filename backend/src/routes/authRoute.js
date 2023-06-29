const express = require("express")
const routes = express.Router()

const users = [{
    id: 1,
    name: "Paulo",
    email: "paulo@gmail.com",
    password: "1234"
}]

routes.post("/login", (req, res) => {
    const { email, password } = req.body
    console.log(req.body)

})

module.exports = routes