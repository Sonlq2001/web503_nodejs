import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    description: {
        type: String,
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
    solid: {
        type: Number,
        default: 0
    },
    shopping: {
        required: false,
        type: Boolean
    }
}, {timestamps: true} )

module.exports = mongoose.module('Product', productSchema);