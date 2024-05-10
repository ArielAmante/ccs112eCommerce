import React, { useState } from 'react';

const ViewCart = () => {
  // Initialize cart state using useState hook
  const [cart, setCart] = useState([]);

  // Function to remove item from cart
  const removeFromCart = (index) => {
    // Create a copy of the current cart array
    const updatedCart = [...cart];
    // Remove the item at the specified index
    updatedCart.splice(index, 1);
    // Update the cart state with the updated array
    setCart(updatedCart);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul className="list-group">
        {cart.map((item, index) => (
          <li key={index} className="list-group-item">
            <div className="d-flex justify-content-between">
              <div>
                <h5>{item.name}</h5>
                <p>Price: ₱ {item.price}</p>
              </div>
              <button className="btn btn-danger" onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewCart;
