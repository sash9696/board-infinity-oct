import React from 'react';
import { createStore } from 'redux';


//redux
//state management tool\
//update , create, state
//you can use it with any other javascript framework or library
//With redux, the state of our application is kept in a store
//and any component can access to that state from the store when it
//needs it

//Redux Flow

//State => User Interface (dispatches an action) => reducer (pure function ), it updates the data => store => data flows back to state


//old way of using using redux
//counter application

//STORE => CONTAINS A GLOBALIZED STATE

//ACTIONS
const increment = () => {
  return {
    type: "INCREMENT"
  }
}

const decrement = () => {
  return {
    type: "DECREMENT"
  }
}


//REDUCER

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counterReducer)

//DISPLAY THE OUTPUT IN CONSOLE

store.subscribe(() => console.log(store.getState()))


store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())





function App() {
  return (
    <div>App</div>
  )
}

export default App