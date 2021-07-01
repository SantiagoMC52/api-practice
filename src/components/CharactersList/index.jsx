import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getApiData from '../../redux/actions/actionCreators';

const CharactersList = () => {
  const characters = useSelector((store) => store.allData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!characters.length) dispatch(getApiData('character'));
  }, []);

  return (
    <section>
      <ul>
        {
        characters.results?.map((character) => (
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
