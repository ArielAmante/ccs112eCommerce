// App.js
import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList'; // Adjusted import path
import Cart from './components/Cart'; // Adjusted import path

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>E-commerce Website</h1>
      </header>
      <ProductList addToCart={addToCart} />
      <Cart items={cartItems} />
    </div>
  );
};

export default App;
