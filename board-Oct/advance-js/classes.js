//classes
//classes are used to create one or more objects

//oops (object oriented programming)
//functional programing

//classes in js are built on prototypes

//Class -> object

//Instance Properties - what they have
// name, age, height

//Instance Methods: what they do
//talk, run, jump

class Rectangle {
    //setup
    constructor(width, height, color) {
        //Instance properties
        this.width = width
        this.height = height
        this.color = color
    }

    //Instance methods
    getArea() {
        return this.width * this.height
    }
    printDetails() {
        console.log(`Rectangle is of ${this.width}width and ${this.height} height and of color ${this.color}`)
    }
}
let rectangle1 = new Rectangle(10, 5, 'green')
let rectangle2 = new Rectangle(7, 3, 'blue')

//4 pillars of oops
//Encaspulation
//Abstraction
//Inheritance
//Polymorphism





