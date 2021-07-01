import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import getApiData from '../../redux/actions/actionCreators';

const List = () => {
  const characters = useSelector((store) => store.allData);
  const dispatch = useDispatch();

  const { section } = useParams();

  useEffect(() => {
    if (!characters.length) dispatch(getApiData(section));
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
          </>
        ))
      }
      </ul>
    </section>
  );
};

export default List;
