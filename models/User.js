const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    id: {
        type: Number,
        require: false
    },
    cedula: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    adult: {
        type: Number,
        require: true
    },
    children: {
        type: Number,
        require: true
    },
    checkIn: {
        type: Date,
        default: Date.now()
    },
    checkOut: {
        type: Date,
        default: Date.now()
    },
    detail: {
        type: String,
        require: true
    }
    // password: {
    //     type: String,
    //     require: true
    // }
});

module.exports = mongoose.model('User', UserSchema);