const express = require('express')
const taskController = require('./controllers/tasksController')


const router = express.Router()

// Home
router.get('/', (req, res) => {
    res.render('home')
})

// Routes 
router.get('/tasks', taskController.index)
router.get('/task/create', taskController.create)
router.get('/task/:id', taskController.show)

router.post('/task/create', taskController.postListTask)
router.post('/task/delete/:id', taskController.deleteTask)
router.post('/task/update/:id', taskController.addTasks)
router.post('/task/update/:id/task/:id_task/', taskController.completedTask)


module.exports = router