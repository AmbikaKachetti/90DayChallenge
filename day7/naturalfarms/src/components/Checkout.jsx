import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();
  
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // Clear the cart on successful checkout
    dispatch({ type: 'CLEAR_CART' });
    alert('Order placed successfully!');
    navigate('/products');
  };

  return (
    <div className="checkout_container">
      <h1>Checkout</h1>
      <div className="checkout_summary">
        <h2>Order Summary</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₹{item.price * item.quantity}</p>
            </li>
          ))}
        </ul>
        <div className="total_price">
          <h3>Total: ₹{totalPrice}</h3>
        </div>
        <button className="confirm_button" onClick={handleCheckout}>
          Confirm & Pay
        </button>
      </div>
    </div>
  );
};

export default Checkout;
