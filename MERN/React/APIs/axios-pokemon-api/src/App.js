import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import FetchPokeApi from './components/FetchPokeApi';
import PokemonNameList from './components/PokemonNameList';
import {useState} from 'react';

function App() {
  const [pokeList, setPokeList] = useState([]);

  const createList = (arr) => {
    setPokeList(arr);
  }

  return (
    <div className="App">
      <FetchPokeApi onFetchList={createList}/>
      <ol className="d-flex flex-wrap w-75 mx-auto my-3 bg-secondary">
        {
          pokeList.map((item, i) =>{
            return(
              <PokemonNameList key={i} name={item.name}/>
            )
          })
        }
      </ol>
    </div>
  );
}

export default App;
