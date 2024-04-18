// Home.js
import React from 'react';
import './Homepage.css';
import logo from './images/Logo.png';

const Home = () => {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="Logo"/>
      </div>

      <h1>Welcome to Shimmer Store!</h1>
      <p>We offer a wide range of products. Click "Proceed to Shopping" to start browsing.</p>
    </div>
  );
}

export default Home;