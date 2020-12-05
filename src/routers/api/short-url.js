const express = require('express')
const router = new express.Router()
const validUrl = require('valid-url')
const Url = require('../../models/url')

router.post('/api/short-url', async(req, res) => {
    try {
        const longUrl = req.body.longUrl
        if (!validUrl.isUri(longUrl)) return res.status(400).send({ error: 'Invalid url!' })

        let url = await Url.findOne({ longUrl })
        if (!url) url = await Url.create({ longUrl })
        res.status(201).send({ shortUrl: `${req.headers.host}/${url.shortUrlCode}` })
    } catch (e) {
        console.error('[ShortURL Router] An error occurred on CREATE /api/short-url.')
        console.error(e)
        res.sendStatus(500)
    }
})

router.get('/api/short-url/:shortUrlCode', async(req, res) => {
    try {
        const shortUrlCode = req.params.shortUrlCode
        const url = await Url.findOne({ shortUrlCode })
        if (!url) return res.status(400).send({ error: 'Invalid url!' })
        res.status(301).send({ shortUrl: `${req.headers.host}/${url.shortUrlCode}` })
    } catch (e) {
        console.error(`[ShortURL Router] An error occurred on GET /api/${shortUrlCode}.`)
        console.error(e)
        res.sendStatus(500)
    }
})

module.exports = router