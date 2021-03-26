import express from 'express';

import { list, create } from './../controllers/category.controller';

const router = express.Router();

// list category
router.get('/categories', list);

// add category
router.post('/categories/add', create);

module.exports = router;