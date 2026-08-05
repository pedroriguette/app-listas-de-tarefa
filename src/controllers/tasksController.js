const listOfTaskModel = require('../models/taskModel')


const taskController = {
    // All tasks
    index: (req, res) => {
        const tasks = listOfTaskModel.getAllTasks()

        res.render('index', { tasks })
    },

    // Get task
    show: (req, res) => {
        const id = req.params.id
        const task = listOfTaskModel.getListById(id)

        res.render('task', { task })
    },

    // Get task form
    create: (req, res) => {
        res.render('newTaskForm')
    },

    // Post task
    postTask: (req, res) => {
        const { name, tasks } = req.body
        const tasksArray = Array.isArray(tasks) ? tasks : [tasks]
        const list = listOfTaskModel.postTask(
            name, tasksArray
        )

        listOfTaskModel.save(list)
        res.redirect('/tasks')
    },

    // add task in array task
    addTasks: (req, res) => {
        const { tasks } = req.body

        const id = req.params.id
        const task = listOfTaskModel.getListById(id)

        task.tasks.push(tasks)
        res.redirect(`/task/${id}`)
    },

    deleteTask: (req, res) => {
        const id = req.params.id

        listOfTaskModel.deleteList(id)

        res.redirect("/tasks")
    }
}

module.exports = taskController