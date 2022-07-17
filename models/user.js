const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    passwordHash: {
        type: String,
        required: true,
    }
})
module.exports = mongoose.model('user', UserSchema)