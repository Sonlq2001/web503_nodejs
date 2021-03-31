import mongoose from 'mongoose';

const slideSchema = new mongoose.Schema({
	image: {
		data: Buffer,
		contentType: String,
		// required: true
	},
	pathImage: {
		type: String,
		trim: true
	}
}, { timestamps: true });

module.exports = mongoose.model('Slide', slideSchema);
