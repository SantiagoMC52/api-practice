/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => (
  <nav className="navbar">
    <Link to={`/${'character'}`}>Characters</Link>
    <Link to={`/${'location'}`}>Locations</Link>
    <Link to={`/${'episode'}`}>Episodes</Link>
  </nav>
);

export default Navbar;
