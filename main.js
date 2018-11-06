const list = document.querySelector('.todo__list')
const listItems = []
const inputSearch = document.querySelector('.todo__input--search')
const inputAdd = document.querySelector('.todo__input--add')

const createItem = () => {
    const task = document.createElement('li')
    const para = document.createElement('p')
    const iconClose = document.createElement('img')

    para.textContent = inputAdd.value
    iconClose.setAttribute('src', '+.png')
    iconClose.addEventListener('click', deleteItem)
    task.appendChild(para)
    task.appendChild(iconClose)
    task.classList.add('todo__list-item')
    listItems.push(task)
}

const deleteItem = (e) => {
    e.target.parentNode.remove()
    listItems.splice(e.target.parentNode.dataset.key, 1)
    renderList()
}

const renderList = () => {
    list.innerHTML = ''
    listItems.forEach((item, key) => {
        item.dataset.key = key
        list.appendChild(item)
    })
}

document.querySelector('.todo__btn-add').addEventListener('click', () => {
    if (inputAdd.value) {
        createItem()
        renderList()
        inputAdd.value = ''
        window.scroll({
            top: document.body.offsetHeight,
            left: 0,
            behavior: 'smooth'
        })
    }
})

// searching
inputSearch.addEventListener('input', () => {
    list.innerHTML = ''
    listItems.filter(item => item.firstChild.textContent.toLowerCase().includes(inputSearch.value.toLowerCase())).forEach(item => list.appendChild(item))
})