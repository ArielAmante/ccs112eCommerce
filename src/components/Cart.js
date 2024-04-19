import React from 'react';

const Cart = ({ cart, removeFromCart, incrementQuantity, decrementQuantity, clearCart }) => {
  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle checkout action
  const handleCheckout = () => {
    alert('Your order has been placed. Thank you for your purchase!');
    clearCart(); // Clear the cart after placing the order
  };

  return (
    <div className="My-Cart" style={{ fontSize: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>My Cart</h2>
      <table className="table table-bordered" style={{ margin: 'auto' }}>
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
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td style={{ textAlign: 'center' }}>₱ {item.price}</td>
              <td style={{ textAlign: 'center' }}>
                <button className="btn btn-secondary btn-sm" onClick={() => decrementQuantity(index)}>-</button>
                {' '}{item.quantity}{' '}
                <button className="btn btn-secondary btn-sm" onClick={() => incrementQuantity(index)}>+</button>
              </td>
              <td style={{ textAlign: 'center' }}>
                <button className="btn btn-danger" onClick={() => removeFromCart(index)}>Remove</button>
              </td>
              <td style={{ textAlign: 'center' }}>₱ {item.price * item.quantity}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="5" style={{ textAlign: 'right', paddingTop: '20px' }}>Total:</td>
            <td style={{ textAlign: 'center', paddingTop: '20px' }}>₱ {totalPrice}</td>
          </tr>
        </tbody>
      </table>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button className="btn checkout-button" style={{ backgroundColor: '#ee4d2d' }} onClick={handleCheckout}>Checkout</button>


      </div>
    </div>
  );
};

export default Cart;
