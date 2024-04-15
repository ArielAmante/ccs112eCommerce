//Cart.js
import React from 'react';

const Cart = ({ cart, removeFromCart, incrementQuantity, decrementQuantity }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="My-Cart" style={{ fontSize: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>My Cart</h2>
      <table style={{ margin: 'auto' }}>
        <thead>
          <tr>
            <th style={{ minWidth: '200px', textAlign: 'left' }}>Product</th>
            <th style={{ minWidth: '200px', textAlign: 'left' }}>Description</th>
            <th style={{ minWidth: '100px', textAlign: 'center' }}>Price</th>
            <th style={{ minWidth: '100px', textAlign: 'center' }}>Quantity</th>
            <th style={{ minWidth: '100px', textAlign: 'center' }}>Action</th>
            <th style={{ minWidth: '100px', textAlign: 'center' }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td style={{ textAlign: 'left' }}>{item.name}</td>
              <td style={{ textAlign: 'left' }}>{item.description}</td>
              <td style={{ textAlign: 'center' }}>₱ {item.price}</td>
              <td style={{ textAlign: 'center' }}>
                <button onClick={() => decrementQuantity(index)}>-</button>
                {item.quantity}
                <button onClick={() => incrementQuantity(index)}>+</button>
              </td>
              <td style={{ textAlign: 'center' }}>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </td>
              <td style={{ textAlign: 'center' }}>₱ {item.price * item.quantity}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="5" style={{ textAlign: 'right', paddingTop: '20px' }}>Total:</td>
            <td style={{ paddingTop: '20px', textAlign: 'center' }}>₱ {totalPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
