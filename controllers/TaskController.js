const Task = require('../models/Task')

const TaskController = {
    async create(req, res) {
        try {
            const task = await Task.create(req.body)
            res.status(201).send({
                message: 'Task created successfully',
                task
            })
        }
        catch (error) {
            console.error(error)
            res.status(500).send({ message: 'There was a problem trying to create a new task' })
        }
    },
    async getAll(req, res) {
        try {
            const allTasks = await Task.find({})
            res.status(200).send(allTasks)
        }
        catch (error) {
            console.error(error)
            res.status(500).send({ message: 'There was a problem trying to get all tasks' })
        }
    },
    async getById(req, res) {
        try {
            const task_id = await Task.findById(req.params._id).exec()
            res.status(200).send(task_id)
        }
        catch (error) {
            console.error(error)
            res.status(500).send({ message: 'There was a problem trying to get the specified task' })
        }
    },
    async markAsCompleted(req, res) {
        try {
            const completedTask = await Task.findByIdAndUpdate(req.params._id, { completed: true }, { new: true })
            res.status(200).send(completedTask)
        }
        catch (error) {
            console.error(error)
            res.status(500).send({ message: 'There was a problem trying to mark the specified task as "completed"' })
        }
    },
    async updateById(req, res) {
        try {
            const updatedTitle = await Task.findByIdAndUpdate(req.params._id, { title: req.body.title }, { new: true })
            res.status(200).send(updatedTitle)
        }
        catch (error) {
            console.error(error)
            res.status(500).send({ message: 'There was a problem trying to update the specified task' })
        }
    },
    async deleteById(req, res) {
        try {
            await Task.findByIdAndDelete(req.params._id)
            res.status(200).send({ message: 'Task successfully deleted' })
        }
        catch (error) {
            console.error(error)
            res.status(500).send({ message: 'There was a problem trying to delete the specified task' })
        }
    }
}

module.exports = TaskController