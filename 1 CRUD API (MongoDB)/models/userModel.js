const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'İsim alanı zorunludur']
    },
    email: {
        type: String,
        required: [true, 'Email zorunludur'],
        unique: true
    },
    age: {
        type: Number,
        default: 18
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);