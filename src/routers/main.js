const express = require('express')
const router = new express.Router()
const Url = require('../models/url')

router.get('/', async(req, res) => {
    try {
        
    } catch (e) {
        console.error('[Main Router] An error occurred on GET /.')
        console.error(e)
        res.sendStatus(500)
    }
})

router.get('/:shortUrlCode', async(req, res) => {
    try {
        const shortUrlCode = req.params.shortUrlCode
        const url = await Url.findOne({ shortUrlCode })
        if (!url) return res.redirect('/')
        res.redirect(url.longUrl)
    } catch (e) {
        console.error('[Main Router] An error occurred on GET /:shortUrlCode.')
        console.error(e)
        res.sendStatus(500)
    }
})

module.exports = router