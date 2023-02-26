import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, signin } from './actions';

function App() {

  const { counter, isLogged } = useSelector((state) => state)

  const dispatch = useDispatch()
  // console.log(counter)


  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment())} >increment</button>
      <button onClick={() => dispatch(decrement())} > decrement</button>
      <button onClick={() => dispatch(signin())} >Login</button>

      {isLogged ? "Some imp information" : ''}
    </div>
  )
}

export default App