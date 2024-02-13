const mongoose = require('mongoose')
require('dotenv').config({path: './env/.env'})

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database successfully connected')
    }
    catch (error) {
        console.error(error)
        throw new Error('Error while initiating database')
    }
}

module.exports = dbConnection