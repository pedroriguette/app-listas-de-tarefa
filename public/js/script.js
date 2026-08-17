function addFields() {
    let id = 2
    const cards = document.querySelector('.cards-task')
    const button = document.getElementById('add-task')
    
    button.addEventListener('click', function addEvent(e) {
        const allCards = document.querySelectorAll('.card-task')

        const div = document.createElement('div')
        const label = document.createElement('Label')
        const input = document.createElement('input')

        div.classList.add('card-task')
        label.htmlFor = 'tasks'
        label.textContent = 'Atividade: '
        input.setAttribute('name', 'tasks')
        input.setAttribute('type', 'text')
        input.setAttribute('id', `tasks-input-${id}`)
        input.setAttribute('placeholder', 'Nome da Atividade')

        div.append(label, input)
        cards.appendChild(div)
        id += 1

        if (allCards.length >= 5) {
            button.removeEventListener('click', addEvent)
        }
    })
}

addFields()