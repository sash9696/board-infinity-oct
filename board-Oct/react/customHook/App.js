// // import './App.css';
// // import data from './db.json'
// // import { useState } from 'react';
// // import PokemonRow from './components/PokemonRow/PokemonRow';
// // import PokemonInfo from './components/PokemonInfo/PokemonInfo';



// // function App() {
// //   // console.log(typeof data.pokemon[1].id)
// //   //Hooks , react 16.8
// //   //built hooks
// //   //state hook => useState()
// //   //2 rules of hooks
// //   //top level management
// //   //under react functions or components

// //   // const [state, setState] = useState(initialValue)

// //   // console.log('App rendered')

// //   // let [count, setCount] = useState(0)
// //   // console.log(count)

// //   // // let count = 0

// //   // function increment() {
// //   //   setCount(count + 1)
// //   // }

// //   const [filter, setFilter] = useState("")
// //   const [selectedPokemon, setSelectedPokemon] = useState(null)
// //   console.log(selectedPokemon)

// //   return (
// //     <div style={{
// //       margin: 'auto',
// //       width: 800,
// //       paddingTop: '1em',
// //     }}>
// //       {/* <h1 >Counter: {count}</h1>
// //       <button onClick={increment} >increment</button> */}

// //       <h1 className='title'>Pokemon Search</h1>

// //       <div style={{
// //         display: 'grid',
// //         gridTemplateColumns: '80% 20%',
// //         gridColumnGap: '1rem'
// //       }}>
// //         <div>
// //           <input type='text'
// //             value={filter}
// //             onChange={(e) => setFilter(e.target.value)} />
// //           <table width="100%">
// //             <tbody>

// //               {data.pokemon.filter(({ name: { english } }) => english.toLocaleLowerCase().includes(filter.toLocaleLowerCase())).slice(0, 20).map((pokemon) => (
// //                 <PokemonRow
// //                   key={pokemon.id}
// //                   pokemon={pokemon}
// //                   setSelectedPokemon={setSelectedPokemon}

// //                 />
// //               ))}

// //             </tbody>

// //           </table>
// //         </div>

// //         {selectedPokemon && <PokemonInfo {...selectedPokemon} />}

// //       </div>

// //     </div>
// //   );
// // }

// // export default App;

// //useeffect hook
// //effect or an after effect 

// // useEffect(function, array)

// //lifecycle of react components

// //3 phases
// //Mounting => birth of the component
// //Updating => state and props change component updates
// //Unmounting => when the component is destroyed

// import React, { useEffect, useState } from 'react'
// import './App.css'
// import Counter from './Counter'

// function App() {
//   const [showCounter, setShowCounter] = useState(false)



//   return (

//     <div className='app'>
//       {showCounter && (
//         <div>
//           <Counter />
//         </div>
//       )}

//       <div className='app-buttons'>
//         <button onClick={() => setShowCounter(true)} >Mount</button>
//         <button onClick={() => setShowCounter(false)}>Unmount</button>
//       </div>
//     </div>
//   )
// }

// export default App


import React, { useEffect, useState } from 'react'
import './App.css'
import useFetchData from './customHooks/useFetchData'

//https://jsonplaceholder.typicode.com/users



function App() {

  // const [users, setUsers] = useState([])
  // const [photos, setPhotos] = useState([])

  // console.log('APP RENEDERED')
  // console.log(photos)

  //custom hooks
  //we can create our own hooks

  //https://jsonplaceholder.typicode.com/photos


  // async function fetchUsers() {

  //   const resp = await fetch('https://jsonplaceholder.typicode.com/users')

  //   // const data =await resp.json()

  //   // setUsers(data)

  //   setUsers(await resp.json())
  // }

  // useEffect(() => {
  //   // fetch('https://jsonplaceholder.typicode.com/users')
  //   //   .then(response => response.json())
  //   //   .then(data => setUsers(data))
  //   fetchUsers()

  // }, [])

  const [users] = useFetchData('https://jsonplaceholder.typicode.com/users')

  const [photos] = useFetchData('https://jsonplaceholder.typicode.com/photos')

  console.log(photos)

  return (
    <div className='app'>
      {users.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}

      <img src={photos[0]?.thumbnailUrl} />

    </div>
  )
}

export default App



