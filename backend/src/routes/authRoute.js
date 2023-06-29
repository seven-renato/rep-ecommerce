require('dotenv').config({path:'vars.env'});
const router = require("express").Router();
const User = require("../models/User")

const CryptoJS = require("crypto-js");

router.post('/login', (req, res) => {
    console.log(req.body)

});

router.post('/register', (req, res) => {
    const name = req.body.name;
    const lastname = req.body.lastname;
    const email = req.body.email;

    const password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString()

    User.create({
        name,
        lastname,
        email,
        password 
    })

});

module.exports = router;