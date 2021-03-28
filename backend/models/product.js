import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema({
    categoryId: {
        type: ObjectId,
        ref: "category",
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    description: {
        type: String,
        trim: true,
        required: true,
        maxlength: 2000
    },
    price: {
        type: Number,
        trim: true,
        required: true,
        maxlength: 2000,
    },
    quantity: {
        type: Number,
    },
    photo: {
        data: Buffer,
        contentType: String

    },
    solid: {
        type: Number,
        default: 0
    },
    shopping: {
        required: false,
        type: Boolean
    }
}, {timestamps: true} )

module.exports = mongoose.model('Product', productSchema);