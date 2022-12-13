import { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
import '../styles/App.scss';


function App() { 
  const[dataCharacter, setDataCharacter] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterBySpecie, setFilterBySpecie] = useState('all');

  useEffect(()=> {
    getDataFromApi().then((cleanData) => {
      setDataCharacter(cleanData);
    });
  }, []);

  const handleFilterName = (name) => {
    setFilterByName(name);
  };

  const handleFilterSpecie = (value) => {
    setFilterBySpecie(value);
  };

  const charactersFiltered = dataCharacter
  .filter((character) => {
    return (character.name.toLowerCase().includes(filterByName.toLowerCase()))
  })
  .filter((character) => {
    return filterBySpecie === 'all' ? true : character.specie === filterBySpecie;
  });

  return (
    <div className='app'>
      <header className='header'>
        <img className='title' src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Rick_and_Morty_title_card_%28cropped%29.png" alt="Rick and Morty y los creadores"/>
      </header>
      <main className='contain'>
        <section className='filters'>  
        <Filters handleFilterName={handleFilterName} filterByName={filterByName} handleFilterSpecie={handleFilterSpecie}/>
        </section>
        <CharacterList characters={charactersFiltered}/>
      </main>
    </div>
  );
}

export default App;
