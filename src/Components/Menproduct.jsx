import React from 'react';
import './Menproduct.css';
import {  Link } from "react-router-dom";


const MenProducts = () => {
  const menProducts = [
    {   
      id: 1,
      name: 'Nike SF Air ',
      price: '£180.00',
      image: '/Images/product 1.jpg',  
     
      },
      {
        id: 2,
        name: 'Nike SF Air Force 1',
        price: '£180.00',
        image: '/Images/product 2.jpg',
      },
      {
        id:3,
        name: 'Nike SF 1',
      price: '£200.00',
      image: '/Images/product 3.jpg',
      },
      {
        id: 4,
        name: 'Yung 96 Trainer',
        price: '£49.00',
        image: '/Images/product 4.jpg',  
      },
      {
        id: 5,
        name: 'Nike SF Air Force 1',
        price: '£180.00',
        image: '/Images/product 5.jpg',   
      },
      {
        id: 6,
        name: 'Nike Lunar Force 1 Duckboot',
        price: '£140.00',
        image: '/Images/product 6.jpg', 
      },
      
  ];

  const recentlyViewed = [
    {
        name: 'Nike Lunar Force 1 Duckboot',
        price: '£140.00',
        image: '/Images/product 6.jpg', 
       
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
            <li className="active"> <Link to="/men"> Men</Link></li>
            <li> <Link to="/women"> Women </Link> </li>
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
        <h2>Men</h2>
        <p>Showing all {menProducts.length} results</p>
        <div className="product-list">
          {menProducts.map((product, index) => (
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

export default MenProducts;
