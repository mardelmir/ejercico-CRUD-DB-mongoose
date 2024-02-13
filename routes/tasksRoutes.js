const express = require('express')
const router = express.Router()
const Task = require('../models/Task')


router.post('/create', async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).send(task)
    }
    catch (error) {
        console.error(error)
        res.status(500).send({ message: 'There was a problem trying to create a new task' })
    }
})


router.get('/:', async (req, res) => {
    try {
        const allTasks = await Task.find({})
        res.status(200).send(allTasks)
     }
    catch (error) {
        console.error(error)
        res.status(500).send({ message: 'There was a problem trying to get all tasks' })
    }
})


router.get('/id/:_id', async (req, res) => {
    try { }
    catch (error) {
        console.error(error)
        res.status(500).send({ message: 'There was a problem trying to get the specified task' })
    }
})


router.put('/markAsCompleted/:_id', async (req, res) => {
    try { }
    catch (error) {
        console.error(error)
        res.status(500).send({ message: 'There was a problem trying to mark the specified task as "completed"' })
    }
})


router.put('/id/:_id', async (req, res) => {
    try { }
    catch (error) {
        console.error(error)
        res.status(500).send({ message: 'There was a problem trying to update the specified task' })
    }
})


router.delete('/id/:_id', async (req, res) => {
    try { }
    catch (error) {
        console.error(error)
        res.status(500).send({ message: 'There was a problem trying to delete the specified task' })
    }
})


module.exports = router