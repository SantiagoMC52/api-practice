import React from 'react';
import Navbar from '../Common/Navbar';
import './dashboard.scss';

const Dashboard = () => (
  <>
    <h2 className="dashboard-title">
      Rick and Morty
    </h2>
    <div className="navbar-container">
      <Navbar />
    </div>
  </>
);

export default Dashboard;
