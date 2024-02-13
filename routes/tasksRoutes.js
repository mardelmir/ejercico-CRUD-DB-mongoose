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
    try {
        const task_id = await Task.findById(req.params._id).exec()
        res.status(200).send(task_id)
    }
    catch (error) {
        console.error(error)
        res.status(500).send({ message: 'There was a problem trying to get the specified task' })
    }
})


router.put('/markAsCompleted/:_id', async (req, res) => {
    try {
        const completedTask = await Task.findByIdAndUpdate(req.params._id, { completed: true }, { new: true })
        res.status(200).send(completedTask)
    }
    catch (error) {
        console.error(error)
        res.status(500).send({ message: 'There was a problem trying to mark the specified task as "completed"' })
    }
})


router.put('/id/:_id', async (req, res) => {
    try {
        const updatedTitle = await Task.findByIdAndUpdate(req.params._id, { title: req.body.title }, { new: true })
        res.status(200).send(updatedTitle)
    }
    catch (error) {
        console.error(error)
        res.status(500).send({ message: 'There was a problem trying to update the specified task' })
    }
})


router.delete('/id/:_id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params._id)
        res.status(200).send({ message: 'Task successfully deleted' })
    }
    catch (error) {
        console.error(error)
        res.status(500).send({ message: 'There was a problem trying to delete the specified task' })
    }
})


module.exports = router