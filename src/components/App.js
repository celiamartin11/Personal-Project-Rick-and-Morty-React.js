import { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
import { Routes, Route, matchPath, useLocation } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import ls from '../services/localStorage';
import '../styles/App.scss';


function App() { 
  const[dataCharacter, setDataCharacter] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterBySpecie, setFilterBySpecie] = useState('all');
  const [request, setRequest] = useState(false);

  useEffect(()=> {
    getDataFromApi().then((cleanData) => {
      setDataCharacter(cleanData);
      setRequest(true);
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
    return filterBySpecie === 'all' ? true : character.specie.toLowerCase() === filterBySpecie.toLowerCase();
  });

  const { pathname } = useLocation();

  const dataUrl = matchPath("/character/:characterId", pathname);

  const characterId = dataUrl !== null? dataUrl.params.characterId : null;
  
  const characterFound = dataCharacter.find((character) => parseInt(character.id) === parseInt(characterId)) 

  if (request === true) {
    return (
      <div className='app'>
        <header className='header'>
          <img className='title' src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Rick_and_Morty_title_card_%28cropped%29.png" alt="Rick and Morty y los creadores"/>
        </header>  
          <Routes>
            <Route
              path='/' element={
                <main className='contain'>
                  <section className='filters'>
                    <Filters handleFilterName={handleFilterName} filterByName={filterByName} handleFilterSpecie={handleFilterSpecie} filterBySpecie={filterBySpecie}/>
                  </section>   
                  <CharacterList characters={charactersFiltered}/>           
                </main>
              }
            />
            <Route path="/character/:characterId" element={<CharacterDetail character={characterFound}/>}/>
          </Routes>
      </div>
    );
  } else {
    return null
  }
};

export default App;
