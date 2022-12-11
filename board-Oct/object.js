
// let user = new Object() //object constructor syntax
// user

// let user = {} //object literal syntax
// user


// let user ={
//     name: 'john',
//     age: 30
// }
// user
// // console.log(user.name, user.age)
// // console.log(user['name'])

// user.isTeacher = true



let user = {
    name: 'john',
    age: 30,
    "is teacher": true
}

console.log(user["is teacher"])



//computed properties
// let item = prompt("Which item to buy?")
// let container = {}

// let container = {
//     [item]: 10
// } or

// container[item] = 10
// console.log(container)




// function createUser(name, age) {

//     return {
//         name: name,
//         age: age
//     }
// }
// let user = createUser('John', 20)
// let user2 = createUser('peter', 30)
// console.log('user', user)
// console.log('user2', user2)



function createUser(name, age) {

    //shorthand property
    return {
        name,
        age
    }
}
let user = createUser('John', 20)
let user2 = createUser('peter', 30)
console.log('user', user)
console.log('user2', user2)


//in keyword

// let user = {
//     name: 'john',
//     age: 20
// }
// let key = "name"
// console.log( key in user)

// console.log("agjkhadasjkdjksahbdhe" in user)

// let obj = {

//     date : new Date()
// }
// let obj = {

//     date : '10/08/2002'
// }
// obj


//using delete keyword
let obj = {

    name: 'john',
    age: 20
}

delete obj.name

obj

let arr = [10, 20, 30, 40]
//dont do it for arrays
delete arr[1]
arr
// 