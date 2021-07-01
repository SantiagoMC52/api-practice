/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import getCharacters from '../../services/getCharacters';

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(setCharacters);
  }, []);

  return (
    <section>
      <ul>
        {
        characters.map((character) => (
          <>
            <li key={character.name}>
              <h2>
                {character.name}
              </h2>
            </li>
            <li>
              <img src={character.image} alt="" />
            </li>
          </>
        ))
      }
      </ul>
    </section>
  );
};

export default CharactersList;
