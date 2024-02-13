const express = require('express')
const app = express()
const PORT = 3000

const dbConnection = require('./config/config')
const tasksRoutes = require('./routes/tasksRoutes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', tasksRoutes)

dbConnection()

app.listen(PORT, () => console.log(`App is listening on http://localhost:${PORT}`))