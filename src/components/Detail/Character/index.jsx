/* eslint-disable react/prop-types */
import React from 'react';

const Character = ({ data }) => (
  <div>
    <h2>{data?.name}</h2>
    <img src={data?.image} alt={data?.name} />
    <p>{data?.status}</p>
    <p>{data?.species}</p>
    <p>{data.origin?.name}</p>
    <p>{data.episode?.length}</p>
  </div>
);

export default Character;
