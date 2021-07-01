import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div>
    <Link to={`/${'character'}`}>Characters</Link>
    <Link to={`/${'location'}`}>Locations</Link>
    <Link to={`/${'episode'}`}>Episodes</Link>
  </div>
);

export default Dashboard;
