import express from 'express';
import { create } from './../controllers/user.controller';


const router = express.Router();

// thêm user
router.post('/user/sign-up', create);

module.exports = router;