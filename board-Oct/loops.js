


// let i = 1

// while (i <= 5) {

//     console.log(i)

//     // i = i + 1  
//     i++
// }



// i = 5

// while (i > 0) {

//     console.log(i)
//     i = i - 1
//     //i--

// }



// i = 5

//if the loop body has a single statement you can skip curly brackets
//while(i != 0)
// while (i) console.log(i--)



//do while
// let i = 0
// do {
//     console.log('the value of i', i);
//     i++;

// } while (i > 5)

// let x = 0

// while (x > 5) {

//     console.log('the value of x', x)

//     // i = i + 1  
//     x++
// }

// if (true) {
//     console.log('hello world');
//     console.log('hi there');

// }

//for loop

// for (begin; condition; step;){

// }

// for (let i = 1; i <= 5; i = i + 1) {
//     console.log(i)
// }

//skip some parts of the for loop

// let i = 0;

// for (; i < 5; i++) { //no need to begin
//     console.log(i)
// }

// for (; i < 5;) { //no need to begin
//     console.log(i++)
// }

//break the loops

// let value = 1
// let sum = 0

// while (value < 5) {

//     if (sum == 6) {
//         break
//     }
//     sum = sum + value

//     value++


// }
// console.log(sum)



//continue lighter version



for (let i = 0; i < 10; i++) {

    if (i == 2 || i == 3) continue
    // if (i % 2 == 0) {
    //     continue //skipping the loop
    // }
    console.log(i)
}