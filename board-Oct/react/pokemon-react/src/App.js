import './App.css';
import data from './db.json'
import { useState } from 'react';
import PokemonRow from './components/PokemonRow/PokemonRow';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';



function App() {
  // console.log(typeof data.pokemon[1].id)
  //Hooks , react 16.8
  //built hooks
  //state hook => useState()
  //2 rules of hooks
  //top level management
  //under react functions or components

  // const [state, setState] = useState(initialValue)

  // console.log('App rendered')

  // let [count, setCount] = useState(0)
  // console.log(count)

  // // let count = 0

  // function increment() {
  //   setCount(count + 1)
  // }

  const [filter, setFilter] = useState("")
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  console.log(selectedPokemon)

  return (
    <div style={{
      margin: 'auto',
      width: 800,
      paddingTop: '1em',
    }}>
      {/* <h1 >Counter: {count}</h1>
      <button onClick={increment} >increment</button> */}

      <h1 className='title'>Pokemon Search</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '80% 20%',
        gridColumnGap: '1rem'
      }}>
        <div>
          <input type='text'
            value={filter}
            onChange={(e) => setFilter(e.target.value)} />
          <table width="100%">
            <tbody>

              {data.pokemon.filter(({ name: { english } }) => english.toLocaleLowerCase().includes(filter.toLocaleLowerCase())).slice(0, 20).map((pokemon) => (
                <PokemonRow
                  key={pokemon.id}
                  pokemon={pokemon}
                  setSelectedPokemon={setSelectedPokemon}

                />
              ))}

            </tbody>

          </table>
        </div>

        {selectedPokemon && <PokemonInfo {...selectedPokemon} />}

      </div>

    </div>
  );
}

export default App;



