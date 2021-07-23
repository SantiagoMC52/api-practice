/* eslint-disable react/prop-types */
import React from 'react';

const SearchBar = ({ placeholder, handleFilter }) => (
  <>
    <div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleFilter}
      />
    </div>
  </>
);

export default SearchBar;
