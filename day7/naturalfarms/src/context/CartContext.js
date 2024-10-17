import React, { createContext, useReducer, useContext } from 'react';

// Define initial state
const initialState = {
  cart: [],
};

// Define cart reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if item already exists in cart
      const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        // Update quantity if item already exists
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += 1; // Increase quantity by 1
        return {
          ...state,
          cart: updatedCart,
        };
      }
      // Add new item to cart
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }], // Set initial quantity to 1
      };
      
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };

    default:
      return state;
  }
};

// Create context
const CartContext = createContext();

// CartProvider component to wrap the app
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};
