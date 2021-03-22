import express from 'express';
import { listProduct, create }  from './../controllers/product.controller';

const router = express.Router();

// list products
router.get('/products', listProduct)

// product detail
router.get('/product/:id', (req, res) => {
    res.json({
        id: req.params.id,
        name: 'san pham 1'
    })
})

// thêm sản phẩm
router.post('/products/add', create)


module.exports = router;