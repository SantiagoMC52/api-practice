import React from 'react';
import CharactersList from './components/CharactersList';

function App() {
  return (
    <section>
      <CharactersList name="Rick and Morty" />
      <CharactersList name="Hasbulla" />
    </section>
  );
}

export default App;
