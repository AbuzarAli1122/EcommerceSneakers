
import React from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';

const Details = ({ products, addToCart }) => {
  const { productId } = useParams();
  const product = products.find((prod) => prod.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details-image">
        <img src={product.image} alt={product.name} className="main-image" />
      </div>
      <div className="product-details-info">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-price">{product.price}</p>

        <p className="product-description">
          Completely enable resource maximizing e-markets after multimedia-based action items.
          Conveniently supply frictionless synergy via top-line schemas. Credibly revolutionize focused meta-services through business portals.
        </p>

       
        <div className="add-to-cart-section">
          <input type="number" min="1" defaultValue="1" className="quantity-input" />
          <button className="add-to-cart-button" onClick={() => addToCart(product)}>
            ADD TO CART
          </button>
        </div>

        <p className="product-sku"><strong>SKU:</strong> 00001</p>
        <p className="product-categories"><strong>Categories:</strong> Kids, New, Women</p>
      </div>
    </div>
  );
};

export default Details;
