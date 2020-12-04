const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        unique: true,
        required: true
    },
    shortUrl: {
        type: String,
        unique: true,
        required: true
    }
}, {
    timestamps: true
})

module.exports = urlSchema