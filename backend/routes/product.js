import express from 'express';
import { addProduct }  from './../controllers/product.controller';

const router = express.Router();

router.get('/products', addProduct)

module.exports = router;