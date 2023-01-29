let posts = [
    { id: 1, title: 'Post One', message: "this is post one" },
    { id: 2, title: 'Post Two', message: "this is post two" },
]

//getPosts
//creatPosts

// function getPosts() {
//     let result = ''
//     setTimeout(() => {
//         posts.forEach((post) => {
//             result = result + `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = result
//     }, 1000)
// }
// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post)
//         callback()
//     }, 2000)
// }

// //callbacks
// createPost({ id: 3, title: 'Post Three', message: "this is post three" }, getPosts)



//using a promise

//promise is an object that reperensts eventual completetion
//of  a asynchronous operation

function getPosts() {
    let result = ''
    setTimeout(() => {
        posts.forEach((post) => {
            result = result + `<li>${post.title}</li>`
        })
        document.body.innerHTML = result
    }, 1000)
}

// console.log(getPosts())

function createPost(post) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            const error = false
            if (!error) {
                resolve()
            } else {
                reject('Something went wrong')
            }
        }, 2000)
    })
}

// console.log(createPost({ id: 3, title: 'Post Three', message: "this is post three" }))
// createPost({ id: 3, title: 'Post Three', message: "this is post three" })
//     .then(getPosts)
//     .then(() => console.log('hello world'))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('finally'))

// //callbacks
// createPost({ id: 3, title: 'Post Three', message: "this is post three" }, getPosts)


//async await

async function x() {
    await createPost({ id: 3, title: 'Post Three', message: "this is post three" })
    getPosts()
}
x()

