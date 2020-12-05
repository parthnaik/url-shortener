const mongoose = require('mongoose')
const nanoid = require('nanoid').nanoid
const validUrl = require('valid-url')

const urlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        unique: true,
        required: true,
        validate(value) {
            if (!validUrl.isUri(value)) throw new Error('must be a valid url')
        }
    },
    shortUrlCode: {
        type: String,
        unique: true,
        required: true
    }
}, {
    timestamps: true
})

urlSchema.pre('validate', function() {
    this.shortUrlCode = nanoid()
})

const Url = mongoose.model('Url', urlSchema)

module.exports = Url