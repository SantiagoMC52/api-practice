/* eslint-disable react/prop-types */
import React from 'react';
import './location.scss';

const Location = ({ data }) => (
  <div className="location">
    <h2>
      Location name:
      {' '}
      {data?.name}
    </h2>
    <p>
      Type:
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
