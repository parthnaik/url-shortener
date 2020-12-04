const mongoose = require('mongoose')

const connectDatabase = (mongoDbUrl) => {
    mongoose.connect(mongoDbUrl, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
}

const disconnectDatabase = () => {
    mongoose.connection.close()
}

module.exports = {
    connectDatabase,
    disconnectDatabase
}