import express from 'express';
import { listProduct, formAdd, create, productById, read, update, remove }  from './../controllers/product.controller';

const router = express.Router();

// list products
router.get('/products', listProduct)

// thêm sản phẩm
router.get('/products/add', formAdd);
router.post('/products/add', create);

// chi tiết sản phẩm
router.get('/product/:productId', read);

// sửa sản phẩm
router.put('/product/:productId', update);

// xóa sản phẩm
router.delete('/product/:productId', remove);

// lấy id sản phẩm
router.param('productId', productById);


module.exports = router;