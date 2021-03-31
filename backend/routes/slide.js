import express from 'express';
import { create } from './../controllers/slide.controller';

const router = express.Router();


router.post('/slide/add', create);

module.exports = router;