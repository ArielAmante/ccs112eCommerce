// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ViewCart from './components/ViewCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/Logo.jpg';


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
          <div className="container-fluid">
            {/* Logo */}
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" style={{ height: '50px' }} />
            </Link>

            {/* Navigation Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
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
