// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ViewCart from './components/ViewCart';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const incrementQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity++;
    setCart(newCart);
  };

  const decrementQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity--;
      setCart(newCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-between">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-primary" to="/" role="button">HOMEPAGE</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-primary" to="/products" role="button">PROCEED TO SHOPPING</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-primary" to="/cart" role="button">MY CART</Link>
            </li>
          </ul>
        </div>
      </nav>

  

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} clearCart={clearCart} />} />
          <Route path="/viewcart" element={<ViewCart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
