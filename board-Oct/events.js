
// //events are occurences that happens in a system
// //system tells us about the events so that we can react to it

// //system is browser in case of javascript
// //events are fired inside browser window

// //examples

// //user selects, clicks or hovers the curson on some element
// //user chooses a key on the keyboard
// //user resizes or closes the browser window
// //When a web page finishes loaded
// //A form is submitted
// //A video is played, paused or ends
// //An error occuring an event


// //So to react to a event we attach an event listener or event handler to it.
// //event handler => js function

// //pick the button element from html dom

// // const button = document.getElementById('button')

// const heading = document.getElementById('heading')


// //attach a event listener

// function randomNumber(length) {
//     return Math.floor(Math.random() * length)
// }

// function generateRandomColor() {
//     let array = ['green', 'blue', 'red', 'aqua']

//     document.body.style.backgroundColor = array[randomNumber(array.length)]
// }

// // button.addEventListener("click", generateRandomColor)
// heading.addEventListener("click", generateRandomColor)


//example 2

const grandparent = document.getElementById('grandparent')
const parent = document.getElementById('parent')
const child = document.getElementById('child')

grandparent.addEventListener('click', function () {
    console.log('grandparent clicked')
})

parent.addEventListener('click', function () {
    console.log('parent clicked')
})

child.addEventListener('click', function () {
    console.log('child clicked')
})

//event bubbling

//






