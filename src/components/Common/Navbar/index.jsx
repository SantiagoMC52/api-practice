import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <Link to={`/${'character'}`}>Characters</Link>
    <Link to={`/${'location'}`}>Locations</Link>
    <Link to={`/${'episode'}`}>Episodes</Link>
  </header>
);

export default Navbar;
