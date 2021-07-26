/* eslint-disable react/prop-types */
import React from 'react';

const Location = ({ data }) => (
  <div>
    <h2>
      Location name:
      {' '}
      {data?.name}
    </h2>
    <p>
      Tyep:
      {' '}
      {data?.type}
    </p>
    <p>
      Dimension:
      {' '}
      {data?.dimension}
    </p>
  </div>
);

export default Location;
