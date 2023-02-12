
import { Component } from 'react'
import './App.css'
import Greetings from './Greetings'

//React js is an Javascript Library built and maintained by facebook.
//React is efficient, declarative and flexible open sourced js library.
//for building simple, fast, and scalavle front end applications
//Reusable Components
//jsx => javascript extension

//can we use only jsx?
//jsx is converted into javascript using babel (compiler)
//u can use normal javascript but jsx is much easier to maintain

//functional programming & Oops

//Class Based Components and Function Based Components

// Before react 16.8
//Class components were the heart of react
//Class compoennts were called as stateful Components
//Function components were called as stateless  or dumb Components

//After react 16.8
//hooks (js functions) were introduced
// Class compoennts and function components  were called as stateful Components
//functions components are used mostly

//props is an object that is used to pass data from
//parent component to child and vice versa is not true
//props are immutable , read only properties
//React is one way binding



class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
        <Greetings name='John' age={20} />
        <Greetings name='Peter' age={30} />
        <Greetings name='abcd' age={40} />
      </div>
    )
  }
}


// function App() {

//   return (
//     <div className="App">
//       <Greetings name='John' age={20} />
//       <Greetings name='Peter' age={30} />
//       <Greetings name='abcd' age={40} />
//     </div>
//   )
// }

export default App
