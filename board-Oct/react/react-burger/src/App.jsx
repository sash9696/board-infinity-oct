import React from 'react'
import './App.css'
import NewBurger from './components/NewBurger/NewBurger'
import { BurgerComponents } from './data'

function App() {
  return (
    <div className='app'>

      <NewBurger ingredients={
        [
          BurgerComponents.LETTUCE,
          BurgerComponents.ONIONS,
          BurgerComponents.MAYO,
          BurgerComponents.LETTUCE,
          BurgerComponents.ONIONS,
        ]
      } />
    </div>
  )
}

export default App