const path = require('path')
const express = require('express')
const connectDatabase = require('./db/connect-disconnect-database').connectDatabase

// Connect to database.
connectDatabase(process.env.MONGODB_URL)

// Set up Express.
const app = express()

// Define paths for Express config.
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup static directory for server.
app.use(express.static(publicDirectoryPath))

// Setup input format for router requests.
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Port to listen on.
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})