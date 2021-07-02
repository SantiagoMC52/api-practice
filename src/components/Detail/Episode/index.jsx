/* eslint-disable react/prop-types */
import React from 'react';

const Episode = ({ data }) => (
  <div>
    <h2>{data?.name}</h2>
    <p>{data?.air_date}</p>
    <p>{data?.created}</p>
  </div>
);

export default Episode;
