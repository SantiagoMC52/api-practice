/* eslint-disable react/prop-types */
import React from 'react';
import './character.scss';

const Character = ({ data }) => (
  <div className="character">
    <h2>{data?.name}</h2>
    <img src={data?.image} alt={data?.name} />
    <p>
      Status:
      {' '}
      {data?.status}
    </p>
    <p>
      Specie:
      {' '}
      {data?.species}
    </p>
    <p>
      Origin:
      {' '}
      {data?.origin?.name}
    </p>
    <p>
      Appeared in:
      {' '}
      {data?.episode?.length}
      {' '}
      episodes
    </p>
  </div>
);

export default Character;
