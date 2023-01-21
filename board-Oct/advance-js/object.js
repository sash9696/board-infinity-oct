
//scalars i.e booleans, strings, numbers they are passed by values
//arrays, objects and functions are passed by references




// let string1 = 'hello'

// let string2 = string1

// string1
// string2


// string1 = 'world'

// string1
// string2


//passed by reference
// let user = {
//     name: 'John'
// }

// let user2 = user

// user
// user2

// user2.name = 'peter'

// user
// user2



//functions

//function declaration
// function x(){
//     console.log(10)
// }

// //arrow function
// const x = () => console.log('hello world')


//named function expression
// let x = function y(){
//     console.log('hello')
// }

//unnamed function expression
// let x = function (){
//     console.log('hello')
// }

//anonymous function
// function (){
//     console.log('hello')
// }


//functions => first class citizens or first class objects in javascript

//pass function to other functions
// x(fucntion(){})
//can we return function from functions
// function x(){

//     return function (){

//     }
// }
//assign function to a variable

// var x = fumction(){}


//object methods

//Object.keys, values, entries

//Object.keys(ob) => returns the array of keys
//Object.values(ob) => returns the array values
// Object.entries(ob) => returns an array of [key, value] pairs


// let user = {
//     name: "john",
//     age: 20
// }
// console.log( Object.keys(user))
// console.log( Object.values(user))
// console.log( Object.entries(user))


// let costs = {
//     books: 150,
//     pens:100,
//     pencils: 50
// }
//transform object

// for (let key in costs) {
//     if (typeof costs[key] == 'number') {
//       costs[key] *= 2;
//     }
//   }

// let doubleCosts = Object.fromEntries(Object.entries(costs).map(cost => [cost[0], cost[1]*2]))
// doubleCosts





// let costs = {
//     books: 300,
//     pens:200,
//     pencils: 100
// }


// console.log(this)


//this keyword

//=> special keyword in js
//most of the time this keyword is determined by how a function is called


//this in global scope points to window object

// let user = {
//     name: 'john',
//     getName: function () {
//         return this.name
//     }
// }

// console.log(user.getName())


//function context

//the value of this is the object that the function is
//accessed on

// function getThis() {
//     return this
// }

// // console.log(getThis())

// const user1 = { name: 'john' }
// const user2 = { name: 'peter' }

// user1.getThis = getThis
// user2.getThis = getThis

// console.log(user1.getThis())
// console.log(user2.getThis())

//it points to the object that is used the called the fuction
//rather where it is present
// const user3 = {
//     __proto__: user1,
//     name: 'Raj'
// }

// console.log(user3.getThis())


//the value of this always changes on how the function is called
//even though it was defined in object at creating.
let user4 = {
    name: "Aman",
    getThis() {
        return this
    }
}
const user5 = { name: 'Piyush' }

user5.getThis = user4.getThis

console.log(user5.getThis())








