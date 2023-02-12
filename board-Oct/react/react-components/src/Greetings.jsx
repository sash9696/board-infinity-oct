import React from "react";



class Greetings extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1> Hello {this.props.name}. {this.props.age} </h1>

        )
    }
}

// function Greetings({ name, age }) {

//     return (
//         // <h1> Hello {props.name}. {props.age} </h1>
//         <h1> Hello {name}. {age} </h1>

//     )
// }

export default Greetings