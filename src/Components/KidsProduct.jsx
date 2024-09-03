import React from 'react';
import './Kidsproduct.css';
import {  Link } from "react-router-dom";


const KidsProducts = () => {
  const KidProducts = [
    {   id:14,
        name: 'Nike SF Air Force 1',
        price: '£180.00',
        image: '/Images/kidimg1.jpg',  
        
      },
      {
        id:15,
        name: 'Nike SF Air Force 1',
        price: '£180.00',
        image: '/Images/kidimg4.jfif',  
        
      },

      {
        id:16,
        name: 'Nike SF Air Force 1',
        price: '£180.00',
        image: '/Images/kidimg5.jpg',  
        
      },
      
  ];

  const recentlyViewed = [
    {
        name: 'Nike Lunar Force 1 Duckboot',
        price: '£140.00',
        image: '/Images/product 6.jpg', 
        hoverImages: ['/Images/product 6 hover.jpg'],
      },
  ];

  return (
    <div className="men-products-container">
     
      <div className="sidebar">
        <input type="text" placeholder="Search Products..." className="search-input" />
        <div className="categories">
          <h3>Product categories</h3>
          <ul>
          <li className="active"><Link to="/kids"> Kids </Link></li>
            <li > <Link to="/men">Men</Link></li>
            <li ><Link to="/women">Women </Link></li>
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
        <h2>KID</h2>
        <p>Showing all {KidProducts.length} results</p>
        <div className="product-list">
          {KidProducts.map((product, index) => (
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

export default KidsProducts;
