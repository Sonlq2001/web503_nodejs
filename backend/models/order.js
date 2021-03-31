import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: 'user',
        required: true
    },
    timerOrder: {
    	type: String,

    },
    name: {
    	type: String,
    	trim: true,
    	required: true,
    },
    phone: {
    	type: Number,
    	trim: true,
    	required: true
    },
    capital: {
    	type: String,
    	trim: true,
    	required: true,
    },
    district: {
    	type: String,
    	trim: true,
    	required: true,
    },
    commune: {
    	type: String,
    	trim: true,
    	required: true,
    },
    addressDetail: {
    	type: String,
    	trim: true,
    },
    SaveInfo: {
    	type: Array
    }

}, { timestamps: true });

module.exports = mongoose.moodel('Order', orderSchema);