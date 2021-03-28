import express from 'express';

import { list, create, categoryId, read, update, remove } from './../controllers/category.controller';

const router = express.Router();

// list category
router.get('/categories', list);

// add category
router.post('/categories/add', create);

// detail category
router.get('/category/:categoryId', read);

// update category
router.put('/category/:categoryId', update);

// lấy id sản phẩm
router.param('categoryId', categoryId);

// xóa danh mục
router.delete('/category/:categoryId', remove)




module.exports = router;