import formidable from 'formidable';
import fs from 'fs';

import Category from './../models/category';


// list category
export const list = (req, res) => {
	Category.find((err, data) => {
        if(err) {
            error: 'Không tìm thấy danh sách sản phẩm'
        }

        res.json({ data })
    })
}

// add category
export const create = (req, res) => {
	const category = new Category(req.body);

	category.save((err, data) => {
		if(err) {
			return res.status(400).json({
				message: "Thêm danh mục thất bại !"
			})
		}
		res.json({ data })
	})
}