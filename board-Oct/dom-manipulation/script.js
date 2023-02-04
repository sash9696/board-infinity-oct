

//Document Object Model

// console.log(document)


//adding the elements

// document.body.appendChild() or

// const body = document.body

//u can add the elements usinf append() or appendChild() but u cannot add text with appendChild()
// body.append("Hello world")
// body.appendChild("Hello world")


//create element

// const body = document.body

// const div = document.createElement('div')

// //adding texts

// // div.innerText = 'Hi everyone'
// // div.textContent = 'hello world'

// // body.append(div)
// body.appendChild(div)

// const div = document.querySelector('div')

// console.log(div.innerText)
// console.log(div.textContent)



// const body = document.body

// const div = document.createElement('div')

// div.textContent = '<strong>Hello everyone</strong>'

// const strong = document.createElement('strong')

// strong.innerText = 'Hello everyone'

// div.append(strong)


// div.innerHTML = '<strong>Hello everyone</strong>'
// body.append(div)


const body = document.body
const div = document.querySelector('div')
const spanone = document.querySelector('#spanone')
const spantwo = document.querySelector('#spantwo')

//removing the elements

// spantwo.remove()
// div.append(spantwo)

// div.removeChild(spanone)

// console.log(spanone.getAttribute('title'))

// console.log(spanone.id)

// spanone.setAttribute('id', 'abcde')

// spanone.title = 'jasnbfkhjabhkjfkj'


//add and remove classes

// spanone.classList.add('new-class')
// spanone.classList.remove('a')

// spanone.classList.toggle('b')

// spantwo.style.color = 'blue'
// spantwo.style.backgroundColor = 'blue'











