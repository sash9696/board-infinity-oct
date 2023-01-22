//call, apply and bind

//function methods

// let user1 = {
//     name: 'John',
//     age: 20,
//     printDetails: function () {
//         console.log(`My name is ${this.name}`)
//     }
// }

// let user1 = {
//     name: 'John',
//     age: 20,
// }
// let printUser = function (city, country) {
//     // console.log(`My name is ${this.name}`)
//     console.log(`${this.name} ${city} ${country}`)
// }
// let user2 = {
//     name: 'Peter',
//     age: 30,
// }
// printUser.call(user1, 'Delhi', 'India')
// printUser.call(user2, 'Mumbai', 'India')
//apply method
// printUser.apply(user1, ['Delhi', 'India'])
// printUser.apply(user2, ['Mumbai', 'India'])

//bind method

let printUserDetails = printUser.bind(user1, "Thane", "India")

//1000lines code

printUserDetails()




//Basic Syntax
//function.call(thisObj,)

// user1.printDetails()


// user1.printDetails.call(user2)

//function borrowing call method
//call is a function that can change the context of invoking function

