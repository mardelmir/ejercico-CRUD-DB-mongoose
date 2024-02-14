const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.post('/create', TaskController.create)
router.get('/', TaskController.getAll)
router.get('/id/:_id', TaskController.getById)
router.put('/markAsCompleted/:_id', TaskController.markAsCompleted)
router.put('/id/:_id', TaskController.updateById)
router.delete('/id/:_id', TaskController.deleteById)

module.exports = router