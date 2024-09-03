import React from 'react';
import './Womenproduct.css';
import {  Link } from "react-router-dom";


const WomenProducts = () => {
  const WomenProducts = [
    {  
       id:11,
        name: 'Nike Lunar women',
        price: '£140.00',
        image: '/Images/product 9.jpg', 
      },
      {
        id:12,
        name: 'Nike SF  Air women',
        price: '£200.00',
        image: '/Images/product 7.jpg',  
      },
      {
        id:13,
        name: 'Yung 96 Trainer women',
        price: '£49.00',
        image: '/Images/product 8.jpg', 
      },
      
     
      
  ];

  const recentlyViewed = [
    {
        name: 'Yung 96 Trainer',
        price: '£49.00',
        image: '/Images/product 8.jpg', 
      },
  ];

  return (
    <div className="men-products-container">
     
      <div className="sidebar">
        <input type="text" placeholder="Search Products..." className="search-input" />
        <div className="categories">
          <h3>Product categories</h3>
          <ul>
            <li><Link to="/kids"> Kids </Link></li>
            <li > <Link to="/men">Men</Link></li>
            <li className="active"><Link to="/women">Women </Link></li>
          </ul>
        </div>
        <div className="recently-viewed">
          <h3>Recently Viewed Products</h3>
          {recentlyViewed.map((product, index) => (
            <div key={index} className="recent-product">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="main-content">
        <h2>Women</h2>
        <p>Showing all {WomenProducts.length} results</p>
        <div className="product-list">
          {WomenProducts.map((product, index) => (
            <div className="product-item" key={index}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p className="price">{product.price}</p>
              <div className="product-buttons">
                <button className="add-to-cart">Add to cart</button>
                <Link to={`/detail/${product.id}/${product.name}`} className="more-info">
                  More Info
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomenProducts;
