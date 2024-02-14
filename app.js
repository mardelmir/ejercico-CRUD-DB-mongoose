const express = require('express')
const app = express()
const PORT = 3000

const dbConnection = require('./config/config')
const tasksRoutes = require('./routes/tasksRoutes')

app.use(express.json()) // para que el req.body no sea undefined, parsea el body

app.use('/', tasksRoutes)
//app.use('/tasks', tasksRoutes) // así se pondría en una empresa real, no '/' del tirón

dbConnection()

app.listen(PORT, () => console.log(`App is listening on http://localhost:${PORT}`))