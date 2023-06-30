require('dotenv').config({path:'vars.env'});
const router = require("express").Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js");

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
  
        const user = await User.findOne({ where: { email } });

        if (!user) {
          return res.status(401).json({ error: 'Invalid credentials!' });
        }
  
        const decryptedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        ).toString(CryptoJS.enc.Utf8);
        
        const passwordMatch = decryptedPassword === password;
        
        if (passwordMatch) {
            console.log("Validou!")
            return res.status(201).json({ message: 'Login successful!' });
        } else {
            return res.status(401).json({ error: 'Invalid credentials!' });
        }

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'An error occurred during login.' });
    }
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