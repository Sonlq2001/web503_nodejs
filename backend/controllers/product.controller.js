import Product from './../models/product';
import formidable from 'formidable';
import fs from 'fs';

// danh sách sản phẩm
export const listProduct = (req, res) => {
    res.json({
        message: 'ok list product'
    })
}

// tạo sản phẩm
export const create = (req, res) => {
    
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                error: "Thêm sản phẩm không thành công"
            })
        }
        // console.log(fields);
        // kiểm tra 
        const { name, description, price } = fields;

        if(!name || !description || !price){
            return res.status(400).json({ 
                error: "Bạn cần nhập đủ thông tin !"
            })
        }

        let product = new Product(fields);

        if(files.photo) {
            if(files.photo.size > 100000) {
                res.status(400).json({
                    error: "Bạn nên upload file ảnh dưới 1mb"
                })
            }

            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.path;
        }
        
        product.save((err, data) => {
            if(err) {
                res.status(400).json({
                    error: "Không thể thêm được sản phẩm"
                })
            }

            res.json(data);
        })

        
    })

    

    

}

// lấy id
export const productById = (req, res, next, id) => {
    Product.findById(id).exec((err, product) => {
        if(err || !product) {
            res.status(400).json({
                error: 'Không tìm thấy sản phẩm'
            })
        }
        req.product = product;
        next();
    })
}

// chi tiết sản phẩm
export const read = (req, res) => {
    return res.json(req.product);
}

// xóa sản phẩm
export const remove = (req, res) => {
    const product = req.product;
    product.remove((err, deletedProduct) => {
        if(err) {
            return res.status(400).json({
                error: "Không xóa được sản phẩm"
            })
        }

        res.json({
            deletedProduct,
            message: "Sản phẩm đã xóa thành công"
        })
    })
}