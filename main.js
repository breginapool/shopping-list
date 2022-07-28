// variables
const inputTask = document.getElementById('input-task')
const addTask = document.getElementById('add-task')
const newTaskContainer = document.getElementById('task-container')

// event listener for add button
addTask.addEventListener('click', addItem)

function addItem() {
  // create elements
  let task = document.createElement('div')
  task.classList.add('task', 'white-container')

  let li = document.createElement('li')
  li.innerText = `${inputTask.value}`
  task.appendChild(li)

  let checkBtn = document.createElement('button')
  checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
  checkBtn.classList.add('check-task', 'btn')
  task.appendChild(checkBtn)

  let removeBtn = document.createElement('button')
  removeBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i></i>'
  removeBtn.classList.add('remove-task', 'btn')
  task.appendChild(removeBtn)

  if (inputTask.value === '') {
    alert('Please Add a Task')
  } else {
    newTaskContainer.appendChild(task)
  }

  // reset placeholder
  inputTask.value = ''

  // add functionality to check button
  checkBtn.addEventListener('click', () => {
    checkBtn.previousElementSibling.style.textDecoration = 'line-through'
  })

  // add functionality to remove button
  removeBtn.addEventListener('click', (e) => {
    let target = e.target

    if (target.matches('button')) target.parentElement.remove()
    else {
      target.parentElement.parentElement.remove() // if target is <i>
    }
  })
}
