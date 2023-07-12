const router = require("express").Router();
const Product = require("../models/Product")

router.post('/add', async (req, res) => {
    try {
        const product = req.body;

        await Product.create(product)
        res.status(200).json();
        
    } catch (error) {
        res.status(500).json();
    }
});

router.get('/find-all', async (req, res) => {
    try {
        products = await Product.findAll()
        res.status(200).json(products);
        
    } catch (error) {
        res.status(500).json();
    }
});

module.exports = router;