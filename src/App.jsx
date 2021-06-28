import React, { useEffect, useState } from 'react';
import CharactersList from './components/CharactersList';
import getCharacters from './services/getCharacters';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(setCharacters);
  }, []);

  return (
    <section>
      {
        characters.map((character) => (
          <>
            <CharactersList key={character.name} name={character.name} />
            <img src={character.image} alt="" />
          </>
        ))
      }
    </section>
  );
}

export default App;
