import './App.css';
import data from './db.json'
import PropTypes from 'prop-types'


const PokemonRow = ({ pokemon }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type}</td>
  </tr>
)

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
  })
};


function App() {
  // console.log(typeof data.pokemon[1].id)
  return (
    <div style={{
      margin: 'auto',
      width: 800,
      paddingTop: '1em',
    }}>
      <h1 className='title'>Pokemon Search</h1>
      <table width="100%">
        <tbody>

          {data.pokemon.slice(0, 20).map((pokemon) => (
            <PokemonRow key={pokemon.id} pokemon={pokemon} />
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default App;



