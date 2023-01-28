//objects => store data in key value pairs
//arrays => store an ordered pair of collection


// let user = {
//     1: 'John',
//     2: 30
// }

// for (let key in user) {
//     console.log(key, typeof key)
// }


//map and set 


//Map
//map is a collection of keyed data items , just like obj
//but it allows us to store keys of any type

//create a map

// let map = new Map()

// map.set('1', 'str1')  //a string key
// map.set(1, 'num1')  //a number key
// map.set(true, 'bool1')  //a boolean key


// console.log(map.get(1))
// console.log(map.get("1"))
// console.log(map.size)

// // map[1] = 'abc' //dont do this as it is considered a plain js obj
// console.log(map)


//map can use object as keys

// let user = { name: 'John' }

// let followersCount = new Map()

// followersCount.set(user, 2000)

// console.log(followersCount.get(user))


//chaining of map

// let map = new Map()

// map.set('1', 'str1')
//     .set(1, 'num1')
//     .set(true, 'bool1')

// console.log(map)


//iteration over map

//map.keys() => returns an iterable for keys
//map.values() => returns an iterable for values
//map.entries() => returns an iterable for entries [key, value]

let newMap = new Map([
    ['john', 20],
    ['peter', 30],
])

// console.log(newMap.keys())

// for (let key of newMap.keys()) {
//     console.log(key)
// }

// for (let value of newMap.values()) {
//     console.log(value)
// }


// for (let entry of newMap) {
//     console.log(entry)
// }

//built in forEach method in map

// newMap.forEach((value, key, map) => {
//     console.log(`${key}:${value}`)
// })

