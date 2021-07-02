/* eslint-disable react/prop-types */
import React from 'react';

const Location = ({ data }) => (
  <div>
    <h2>{data?.name}</h2>
    <p>{data?.type}</p>
    <p>{data?.dimension}</p>
  </div>
);

export default Location;
