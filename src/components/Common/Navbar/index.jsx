/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => (
  <div className="navbar">
    <nav className="navbar__items">
      <Link to={`/${'character'}`}>Characters</Link>
      <Link to={`/${'location'}`}>Locations</Link>
      <Link to={`/${'episode'}`}>Episodes</Link>
    </nav>
  </div>
);

export default Navbar;
