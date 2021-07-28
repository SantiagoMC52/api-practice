/* eslint-disable react/prop-types */
import React from 'react';

const SearchBar = ({ placeholder, handleFilter }) => (

  <>
    <input
      className="search-box"
      type="text"
      placeholder={placeholder}
      onChange={handleFilter}
    />
  </>

);

export default SearchBar;
