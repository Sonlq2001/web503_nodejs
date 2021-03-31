import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        maxLength: 15
    },
    email: {
        type: String,
        trim: true,
        required: true,
        maxLength: 50,
    },
    password: {
        type: String,
        trim: true,
        required: true,
        maxLength: 20
    },
    avatar: {
        data: Buffer,
        contentType: String
    },
    role: {
        type: Number,
        default: 0
    }

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);