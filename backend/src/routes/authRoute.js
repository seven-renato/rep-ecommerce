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