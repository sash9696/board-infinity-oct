//asynchronous

//synchronous code => line by line
// console.log('hi everyone')

// function print() {
//     console.log(10)
// }
// print()
// console.log('bye ')


//long running synchronous code

// console.log('hi everyone')

// function square(num) {

//     let result = 0
//     for (let i = 1; i <= num; i++) {
//         for (let j = 1; j <= num; j++) {
//             result = result + 1
//         }
//     }
//     return result
// }
// console.log(square(40000))
// console.log(square(40000))

// console.log('bye ')
// //100 lines of code

// console.log(10)
// console.log(20)


//Quickly start running the function
//it will return the result as soon the operation completed


//basic async

//callbacks

// console.log('hi everyone')

// setTimeout(() => {
//     console.log(10)
// }, 2000)
// console.log('bye ')



// console.log('hi everyone')

// setTimeout(() => {
//     console.log(square(40000))
// }, 0000)
// function square(num) {

//     let result = 0
//     for (let i = 1; i <= num; i++) {
//         for (let j = 1; j <= num; j++) {
//             result = result + 1
//         }
//     }
//     return result
// }



//callbacks
//callback hell


// setTimeout(() => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//             console.log(3)
//             setTimeout(() => {
//                 console.log(4)
//                 setTimeout(() => {
//                     console.log(5)
//                     setTimeout(() => {
//                         console.log(6)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

//inversion of control

// function getOrders(callback){
//     //100more lines of code
//     console.log('getting orders')
//     callback()
// }

// getOrders(proceedToPayment)

// function proceedToPayment(){
//     console.log('proceed to payment')
// }


//Promises







