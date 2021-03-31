import Slide from './../models/slide';
import formidable from 'formidable';
import fs from 'fs';

export const create = (req, res) => {
	let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
		if(err){
			return res.status(400).json({
				error: "Thêm slide không thành công !"
			})
		}

		const { pathImage } = fields;
		if(!pathImage){
			return res.status(400).json({
				error: "Bạn cần nhập đủ thông tin !"
			})
		}

		let slide = new Slide(fields);

		// if(files.avatar) {
		// 	if(files.avatar.size > 100000){
		// 		res.status(400).json({
		// 			error: "Bạn nên upload file ảnh dưới 1mb"
		// 		})
		// 	}
		// 	user.avatar.data = fs.readFileSync(files.avatar.path);
		// 	user.avatar.contentType = files.avatar.path;
		// }

		console.log(slide);
		slide.save((err, data) => {
            if(err) {
                res.status(400).json({
                    error: "Thêm slide không thành công !"
                })
            }

            res.json(data);
        })

	})
}