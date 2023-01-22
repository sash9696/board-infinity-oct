//prototype

//every object has a built in property that is called as prototype

//prototype chain
// let nums = [10, 20, 30]

// let obj = {
//     name: 'john'
// }
// function x() {

// }

// let cat = {
//     jumps: true
// }

// let animal = {
//     eats: true
// }

// cat.__proto__ = animal
// // sets cat.[[Prototype]] = animal

// console.log(cat.jumps)
// console.log(cat.eats)

//prototypal inheritance
//cat prototypically inherits animal




// let animal = {
//     eats: true,
//     walk() {
//         console.log('animal walks')
//     }
// }
// let cat = {
//     jumps: true,
//     __proto__: animal
// }
// cat.walk()