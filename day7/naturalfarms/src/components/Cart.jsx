import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate(); // Use navigate to redirect to checkout

  const handleRemoveFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart_container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} />
                <div className="cart_item_details">
                  <p className="cart_item_name">{item.name}</p>
                  <p className="cart_item_price">₹{item.price * item.quantity}</p>
                </div>
                <div className="quantity_controls">
                  <button
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch({
                          type: 'UPDATE_QUANTITY',
                          payload: { ...item, quantity: item.quantity - 1 },
                        });
                      }
                    }}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => {
                      dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: { ...item, quantity: item.quantity + 1 },
                      });
                    }}
                  >
                    +
                  </button>
                  <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="total_price">Total Price: ₹{totalPrice}</div>
          {/* Proceed to Checkout button */}
          <button className="checkout_button" onClick={() => navigate('/checkout')}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
