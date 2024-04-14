// Cart.js
import React from 'react';

const Cart = ({ items }) => {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className="Cart-Summary">
      <h2 style={{ textAlign: 'center' }}>Cart Summary</h2>
      <ul style={{ textAlign: 'center', padding: 0 }}>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p style={{ textAlign: 'center', marginTop: '10px' }}>Total: ${totalPrice}</p>
    </div>
  );
};

export default Cart;
