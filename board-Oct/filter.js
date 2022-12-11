//filter



// let nums = [10,20,30,40,50]

// let filteredItems = nums.filter((num, index) => num < 40)


// let nums = [1,2,3,4,5,6,7,8,9,10]

// let filteredItems = nums.filter((num, index) => num % 2 == 0)

// filteredItems


let users = [
    {
        name: "john",
        age: 20
    },
    {
        name: "peter",
        age: 30
    },
    {
        name: "jonathan",
        age: 35
    },
    {
        name: "johnson",
        age: 50
    }
]

let filteredUsers = users.filter((user, index) => {

    return user.age > 40
})
filteredUsers
