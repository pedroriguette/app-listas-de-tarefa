let listOfTasks = []

const enumStatus = {
    'pending': 'pending',
    'in progress': 'in progress',
    'completed': 'completed'
}

const listOfTaskModel = {
    // List all List tasks
    getAllTasks: () => {
        return listOfTasks
    },

    // Create a new task 
    postTask: (name, tasks) => {
        const list = {
            id: Date.now().toString(),
            name: name,
            tasks: tasks,
            status: enumStatus.pending,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        return list
    },

    // Save task list
    save: (list) => {
        listOfTasks.push(list)
    },
    // get a list by id
    getListById: (id) => {
        return listOfTasks.find(list => list.id == id)
    },

    // update a list by id
    updateList: (id, updatedList) => {
        const index = listOfTasks.findIndex(list => list.id === id)

        listOfTasks[index] = { ...listOfTasks[index], ...updatedList, updatedAt: new Date() }
    },

    // Delete a list by id 
    deleteList: (id) => {
        listOfTasks = listOfTasks.filter(task => task.id !== id)
    }
}


module.exports = listOfTaskModel