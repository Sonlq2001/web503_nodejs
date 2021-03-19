import express from 'express';

const routerCate = express.Router();

routerCate.get('/categories', (req, res) => {
    console.log(res);

    res.json({
        message: "thanh cong category"
    })
})

module.exports = routerCate;