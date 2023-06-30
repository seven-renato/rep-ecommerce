require('dotenv').config({path:'vars.env'});
const router = require("express").Router();
const User = require("../models/User")

const CryptoJS = require("crypto-js");

router.post('/login', (req, res) => {
    console.log(req.body)

});

router.post('/register', async (req, res) => {
    const user = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
                req.body.password,
                process.env.PASS_SEC
            ).toString()
    }

    try {
        await User.create(user)
        res.status(201).json("Successfully registered user!");
      } catch (err) {
        res.status(500).json(err);
      }

});

// ROTA PARA TESTAR SE JÁ EXISTE ALGUÉM COM UM DETERMINADO E-MAIL (NA HORA DE REGISTRAR UM USUÁRIO)
router.post("/check-email", async (req, res)  => {
    console.log(req.body.email)

    try {
        const email = await User.findOne({where:{email:req.body.email}});
        console.log(email)
        if (email) {
            return res.status(404).json();
        }
        res.status(200).json();
      } catch (err) {
        res.status(500).json(err);
      }
});

module.exports = router;