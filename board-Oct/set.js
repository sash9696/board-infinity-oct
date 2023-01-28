
//set

//special type of collection that only includes only unique values
//it removes the duplicates and stores a single occurence

// let array = [10, 20, 10, 20, 30, 40, 30]

// let set = new Set(array)
// array = [...set]

// console.log(array)


//set.keys() => returns an iterable for keys
//set.values() => sames as set.keys()
//set.entries() => returns an iterable for entries [value, value]

let set = new Set([1, 2, 3, 4, 1, 2, 3, 4])

for (let value of set) {
    console.log(value)
}

set.forEach((value, valueAgain, set) => {
    console.log(value, valueAgain)
})
