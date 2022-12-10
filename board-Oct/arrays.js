

// let arr = new Array()
// arr

// let arr = []
// arr

// let nums = [10,20,30,40]

// nums
// console.log(nums[0])
// console.log(nums[1])
// console.log(nums[2])
// console.log(nums[3])
// console.log(nums[4])

// let arr = [10,'a', 20,'john']
// arr

// let arr = ['john', {name: 'john'},true, function(){console.log('hello')}]

// console.log(arr[0])


//strings, booleans, numbers  => primitive data types => passed by value
//arrays, objects => non- primitive => passed by reference

// var a = 10
// var b = a

// b = 20
// b
// a

// let arr1 = [10,20]

// let arr2 = arr1

// arr2[1] =30
// arr1
// arr2



// let nums = [10,20,30,40]

// // console.log(nums.length)
// let lastIndex = nums.length - 1
// console.log(nums[lastIndex])


// console.log(nums.at(-1))


let nums = [10, 20, 30, 40, 50]

// nums.push(200)
// nums.push(300)
// nums
// nums.pop()
// nums

nums
// nums.shift()
// nums
// nums.unshift(120)
// nums



let nums = [10, 20, 30, 40, 50]

// for (let i = 0 ; i < nums.length ; i++){
//     console.log(i)
// }

//instead if u need to work with indexes
//use for in loop

for (let key in nums) {
    console.log(key)
}

//if u want to work with values use for of loop

for (let value of nums) {
    console.log(value)
}