

// for (let key in obj){
//     key
//     console.log(obj[key])
// }


//Object.keys , .values, .entries


// let obj = {
//     name: 'john',
//     age: 20
// }


// let data = Object.values(obj)
// for(let value of Object.values(obj)){
//     value
// }

let itemPrices = {
    coke: 20,
    pizza: 200,
    burger: 100
}

// let priceDoubled = Object.entries(itemPrices).map((item) =>{

//     return [item[0], item[1]*2]
// })
// console.log(Object.fromEntries(priceDoubled))


//use object.entries(obj) to get an array of key and value pairs
//use array methods
//use object.fromEntries(array) to covert it again back to object

// let priceDoubled = Object.fromEntries(Object.entries(itemPrices).map((item) =>{

//     return [item[0], item[1]*2]
// }))
// priceDoubled



let obj = { name: 'john' }
// let obj2 = {name:'john'}
let obj2 = obj

console.log(obj == obj2)




