import React from 'react';
import CharactersList from './components/CharactersList';
import CHARACTERS from './constants/data-mock';

function App() {
  return (
    <section>
      {
        CHARACTERS.map((character) => (
          <CharactersList key={character.name} name={character.name} />
        ))
      }
    </section>
  );
}

export default App;
