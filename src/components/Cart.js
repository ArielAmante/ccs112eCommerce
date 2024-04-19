// Cart.js
import React from 'react';

const Cart = ({ cart, removeFromCart, incrementQuantity, decrementQuantity, clearCart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert('Your order has been placed. Thank you for your purchase');
    clearCart(); // Clear the cart after placing the order
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">My Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>₱ {item.price}</td>
              <td>
                <button onClick={() => decrementQuantity(index)}>-</button>
                {item.quantity}
                <button onClick={() => incrementQuantity(index)}>+</button>
              </td>
              <td>
                <button className="remove-button" onClick={() => removeFromCart(index)}>Remove</button>
              </td>
              <td>₱ {item.price * item.quantity}</td>
            </tr>
          ))}
          <tr className="total-row">
            <td colSpan="5">Total:</td>
            <td>₱ {totalPrice}</td>
          </tr>
        </tbody>
      </table>
      <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
