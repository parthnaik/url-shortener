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

const Url = mongoose.model('Url', urlSchema)

module.exports = Url