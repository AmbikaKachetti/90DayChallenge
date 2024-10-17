import React from 'react';
import './Products.css';
import { useCart } from '../context/CartContext.js';  // Import useCart hook
import cornImage from '../assets/productsAssets/corn_card.png';
import custardAppleImage from '../assets/productsAssets/custard-apple_card.png';
import kiwiImage from '../assets/productsAssets/Kiwi.png';
import pineappleImage from '../assets/productsAssets/pineapple_card.png';
import dragonImage from '../assets/productsAssets/dragon.png';
import grapeImage from '../assets/productsAssets/grape.png';
import limeImage from '../assets/productsAssets/Lime.png';
import pearImage from '../assets/productsAssets/pear.png';
import plumImage from '../assets/productsAssets/plum.png';
import pomogranateImage from '../assets/productsAssets/pomogranate.png';

const productsData = [
  {
    "id": 1,
    "name": "CORN",
    "image": cornImage,
    "rating": 4.4,
    "price": 23,
    "farm": "AP Natural Farms",
    "offer": false
  },
  {
    "id": 2,
    "name": "CUSTARD APPLE",
    "image": custardAppleImage,
    "rating": 4.5,
    "price": 52,
    "farm": "TS Natural Farms",
    "offer": true
  },
  {
    "id": 3,
    "name": "KIWI",
    "image": kiwiImage,
    "rating": 4.2,
    "price": 30,
    "farm": "AP Natural Farms",
    "offer": false
  },
  {
      "id": 4,
      "name": "PINEAPPLE",
      "image": pineappleImage,
      "rating": 4.5,
      "price": 41,
      "farm": "TS Natural Farms",
      "offer": true
  },
  {
      "id": 5,
      "name": "DRAGON",
      "image": dragonImage,
      "rating": 4.8,
      "price": 60,
      "farm": "Sunny Farms",
      "offer": false
  },
  {
      "id": 6,
      "name": "GRAPE",
      "image": grapeImage,
      "rating": 4.6,
      "price": 15,
      "farm": "Tropical Farms",
      "offer": true
  },
  {
      "id": 7,
      "name": "LIME",
      "image": limeImage,
      "rating": 4.7,
      "price": 75,
      "farm": "Himalayan Orchards",
      "offer": false
  },
  {
      "id": 8,
      "name": "PEAR",
      "image": pearImage,
      "rating": 4.3,
      "price": 30,
      "farm": "Citrus Farms",
      "offer": true
  },
  {
      "id": 9,
      "name": "PLUM",
      "image": plumImage,
      "rating": 4.5,
      "price": 45,
      "farm": "Vineyard Estates",
      "offer": false
  },
  {
      "id": 10,
      "name": "POMOGRANATE",
      "image": pomogranateImage,
      "rating": 4.9,
      "price": 90,
      "farm": "Berry Good Farms",
      "offer": true
  }
];

// Product Card Component
const ProductCard = ({ product, handleAddToCart }) => (
  <div className="card">
    <div className="card_image">
      <img src={product.image} alt={product.name} className="image" />
      {product.offer && <span className="offer">Offer</span>}
    </div>
    <div className="card_details">
      <div className="name_rating">
        <div className="item_name">
          <h2>{product.name}</h2>
        </div>
        <div>
          <i className="fa fa-star" aria-hidden="true"></i>
          <span>({product.rating})</span>
        </div>
      </div>
      <div className="price">
        <h1>₹<span>{product.price}</span></h1>
      </div>
      <div className="farm">
        <p>{product.farm}</p>
      </div>
      {/* Add to Cart Button */}
      <button className="add_to_cart_button" onClick={() => handleAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  </div>
);

// Main Products Component
const Products = () => {
  const { dispatch } = useCart();  // Access dispatch from useCart

  // Dispatch ADD_TO_CART action
  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div id="Products" className="products_container">
      <p className="products_container_heading">Our Natural Farm's Products</p>
      <section className="products">
        {productsData.map(product => (
          <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </section>
    </div>
  );
};

export default Products;
