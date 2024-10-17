import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';  // Import useCart hook
import './Header.css';  // Import CSS for the header

const Header = () => {
  const { cart } = useCart();  // Access cart from useCart

  // Calculate total number of items in the cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='header_container'>
      {/* Logo */}
      <div className='logo'>
        <h1>Natural Farms</h1>
      </div>

      {/* Search Bar */}
      <div className="header_search">
        <div className="search_bar">
          <input type="text" placeholder="Search here..." />
          <button className='search_button'>Search</button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className='nav_links'>
        <Link to='/' className='header_button'>Home</Link>
        <Link to='/signin' className='header_button'>Signin</Link>
        <Link to='/signup' className='header_button'>Signup</Link>
        <Link to='/products' className='header_button'>Products</Link>
        <Link to='/contactus' className='header_button'>Contact Us</Link>
      </nav>

      {/* Cart Icon with Count */}
      <div className="cart">
        <Link to='/cart' className='header_button'>
          <i className="fa fa-shopping-cart"></i>
          <span className="cart_count">Cart: {cartCount}</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
