import Product from './../models/product';


export const listProduct = (req, res) => {
    console.log('list product');
}


export const create = (req, res) => {
    const product = new Product(req.body);

    product.save((err, data) => {
        if(err) {
            return res.status(400).json({
                error: "Product does note exist"
            })
        }

        res.json({ data });
    })
    res.json({
        message: 'add product successfully'
    })
}