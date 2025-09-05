const express = require('express')
const taskController = require('./controllers/taskController')

const router = express.Router()

//rotas de crud
router.get('/tasks', taskController.getAll)
router.get('/tasks/:id', taskController.getById)
// router.post('/tasks', taskController.create)
// router.put('tasks' , taskController.update)
// router.delete('tasks', taskController.remove)

module.exports = router