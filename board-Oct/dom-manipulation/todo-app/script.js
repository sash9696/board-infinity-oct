

//adding an item

//attach a event listner submit

//capture the user's input 

//append the text and the button in the list item

//append a list item into the unordered list


//variables
const form = document.getElementById('addForm')

const todoList = document.getElementById('items')



//event listeners
form.addEventListener('submit', addTodo)



//functions

function addTodo(e) {
    e.preventDefault()

    //get the input value from the user
    const newTodo = document.getElementById('item').value

    console.log(newTodo)

    //create a new li element

    const li = document.createElement('li')

    //add all the classes to the new todo
    li.className = "list-group-item"

    //create new delete button

    const deleteBtn = document.createElement('button')

    //add classes to the button

    deleteBtn.className = "btn btn-danger btn-sm float-end delete"

    //add text to delete button

    deleteBtn.textContent = 'Delete'

    //append the delete button to li 
    li.textContent = newTodo

    li.append(deleteBtn)

    //add the new todo to li element




    //append li to todolist

    todoList.append(li)





}

