import User from './../models/user';
import formidable from 'formidable';
import fs from 'fs';

// tạo user
export const create = (req, res) => {
	let form = new formidable.IncomingForm();
    form.keepExtensions = true;

	form.parse(req, (err, fields, files) => {
		if(err){
			return res.status(400).json({
				error: "Đăng kí tài khoản thất bại !"
			})
		}

		const { name, email, password, phone } = fields;
		if(!name || !email || !password || !phone){
			return res.status(400).json({
				error: "Bạn cần nhập đủ thông tin !"
			})
		}

		let user = new User(fields);

		// if(files.avatar) {
		// 	if(files.avatar.size > 100000){
		// 		res.status(400).json({
		// 			error: "Bạn nên upload file ảnh dưới 1mb"
		// 		})
		// 	}
		// 	user.avatar.data = fs.readFileSync(files.avatar.path);
		// 	user.avatar.contentType = files.avatar.path;
		// }

		user.save((err, data) => {
            if(err) {
            	console.log(err);
                res.status(400).json({
                    error: "Đăng kí tài khoản thất bại !"
                })
            }

            res.json(data);
        })

	})
}