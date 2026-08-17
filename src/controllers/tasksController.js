const listOfTaskModel = require('../models/taskModel')


const taskController = {
    // All ListTasks
    index: (req, res) => {
        const tasks = listOfTaskModel.getAllTasks()

        res.render('index', { tasks })
    },

    // Get ListTask
    show: (req, res) => {
        const id = req.params.id
        const task = listOfTaskModel.getListById(id)

        res.render('task', { task })
    },

    // Get ListTask form
    create: (req, res) => {
        res.render('newTaskForm')
    },

    // Post ListTask
    postListTask: (req, res) => {
        const { name, tasks } = req.body
        const arrayTask = []
        if (Array.isArray(tasks)) {
            tasks.forEach(t => {
                arrayTask.push(
                    {
                        id_task: Math.floor(Math.random() * 99999).toString(),
                        task: t,
                        check: false
                    }
                )
            })
        } else {
            arrayTask.push(
                {
                    id_task: Math.floor(Math.random() * 99999).toString(),
                    task: tasks,
                    check: false
                }
            )
        }

        const list = listOfTaskModel.postListTask(
            name, arrayTask
        )

        listOfTaskModel.save(list)
        res.redirect('/tasks')
    },

    // delete ListTask
    deleteTask: (req, res) => {
        const id = req.params.id

        listOfTaskModel.deleteList(id)

        res.redirect("/tasks")
    },

    // add task in array task
    addTasks: (req, res) => {
        const { tasks } = req.body

        const id = req.params.id
        const task = listOfTaskModel.getListById(id)

        task.tasks.push(
            {
                id_task: Math.floor(Math.random() * 99999).toString(),
                task: tasks,
                check: false
            }
        )
        res.redirect(`/task/${id}`)
    },

    // Completed task
    completedTask: (req, res) => {
        const { check } = req.body
        const id = req.params.id
        const id_task = req.params.id_task

        const listTask = listOfTaskModel.getListById(id)
        listTask.tasks.find(t => t.id_task == id_task)
        .check = check === 'true' ? true : false

        listOfTaskModel.updateList(id, listTask)
        res.redirect(`/task/${id}`)
    }
}

module.exports = taskController