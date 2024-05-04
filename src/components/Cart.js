import React, { useState, useEffect } from 'react';

const Cart = ({ cart, removeFromCart, incrementQuantity, decrementQuantity, clearCart }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [shippingData, setShippingData] = useState({ name: '', address: '', city: '', country: '' });
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    if (cart.length === 0) {
      setShowCheckout(false);
    }
  }, [cart]);

  const handleInput = (e) => {
    setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  };

  const submitOrder = (e) => {
    e.preventDefault()
    console.log('Shipping Data:', shippingData);
    alert('Your order has been placed. Thank you for your purchase!');
    clearCart(); // This should now also hide the checkout form
    setShippingData({ name: '', address: '', city: '', country: '' });
    setShowCheckout(false); // Hide the modal after submitting the order
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      setShowCheckout(true);
    } else {
      alert('Your cart is empty.');
    }
  };

  return (
    <div className="My-Cart container" style={{ fontSize: '20px', backgroundcolor: "#ee4d2d" }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>My Cart</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-orange">
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
                <td>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={item.image} alt={item.name} style={{ width: '100px', height: 'auto', marginRight: '10px' }} />
                    {item.name}
                  </div>
                </td>
                <td>{item.description}</td>
                <td style={{ textAlign: 'center' }}>₱ {item.price}</td>
                <td style={{ textAlign: 'center' }}>
                  <button className="btn btn-secondary btn-sm" onClick={() => decrementQuantity(index)} style={{backgroundColor: '#ee4d2d'}}>-</button>
                  {' '}{item.quantity}{' '}
                  <button className="btn btn-secondary btn-sm" onClick={() => incrementQuantity(index)} style={{backgroundColor: '#ee4d2d'}}>+</button>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <button className="btn btn-danger" onClick={() => {
                      removeFromCart(index);
                      if (cart.length <= 1) setShowCheckout(false);
                    }} style={{backgroundColor: '#ee4d2d'}}>Remove</button>
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
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="btn checkout-button" style={{ backgroundColor: '#ee4d2d', color: "white" }} onClick={handleCheckout}>Checkout</button>
      </div>

      {/* Bootstrap modal */}
      {showCheckout && (
        <div className="modal" tabIndex="-1" style={{ display: showCheckout ? 'block' : 'none' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Enter your shipping details</h5>
                <button type="button" className="btn-close" onClick={() => setShowCheckout(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={submitOrder}>
                  <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input type="text" className="form-control" name="name" value={shippingData.name} required onChange={handleInput} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Address:</label>
                    <input type="text" className="form-control" name="address" value={shippingData.address} required onChange={handleInput} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">City:</label>
                    <input type="text" className="form-control" name="city" value={shippingData.city} required onChange={handleInput} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Country:</label>
                    <input type="text" className="form-control" name="country" value={shippingData.country} required onChange={handleInput} />
                  </div>
                  <button type="submit" className="btn" style={{ backgroundColor: '#ee4d2d', color: 'white', marginTop: '10px' }}>Place Order</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
