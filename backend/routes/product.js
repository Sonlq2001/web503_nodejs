import express from 'express';

const router = express.Router();

router.get('/products', (req, res) => {
    console.log('product list');

    res.json({
        message: "thanh cong"
    })
})

module.exports = router;