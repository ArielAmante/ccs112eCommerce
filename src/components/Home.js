// Home.js
import React from 'react';
import './Homepage.css';
import logo from '../images/Logo.jpg'; // Update the logo import path

const Home = () => {
  return (
    <div className="home-container">
      <div className="logo">
        <img className='rounded-circle' src={logo} alt="Logo"/>
      </div>

      <div className="content">
        <h1>Welcome to Shimmer Store!</h1>
        <p>We offer a wide range of products. Click "Proceed to Shopping" to start browsing.</p>
      </div>
    </div>
  );
}

export default Home;
