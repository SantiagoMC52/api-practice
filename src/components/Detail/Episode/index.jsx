/* eslint-disable react/prop-types */
import React from 'react';
import './episode.scss';

const Episode = ({ data }) => (
  <div className="episode">
    <h2>
      Episode name:
      {' '}
      {data?.name}
    </h2>
    <p>
      Air date:
      {' '}
      {data?.air_date}
    </p>
    <p>
      Date of creation:
      {' '}
      {data?.created}
    </p>
  </div>
);

export default Episode;
