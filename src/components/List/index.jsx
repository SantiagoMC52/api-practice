import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import getApiData from '../../redux/actions/actionCreators';

const List = () => {
  const characters = useSelector((store) => store.allData);
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState(1);

  const { section } = useParams();

  useEffect(() => {
    if (!characters.length) dispatch(getApiData(section, pagination));
  }, [pagination]);

  function handleNext() {
    setPagination(pagination + 1);
    dispatch(getApiData(section, pagination));
  }
  function handlePrevious() {
    setPagination(pagination - 1);
    dispatch(getApiData(section, pagination));
  }

  return (
    <section>
      <ul>
        {
        characters.results?.map((character) => (
          <>
            <li key={character.name}>
              <h5>
                {character.name}
              </h5>
            </li>
          </>
        ))
      }
      </ul>

      <div>
        <button type="button" disabled={pagination <= 1} onClick={handlePrevious}>Previous</button>
        <button type="button" disabled={pagination >= characters.info?.pages} onClick={handleNext}>Next</button>
      </div>
    </section>
  );
};

export default List;
