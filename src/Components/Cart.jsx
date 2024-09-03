import React, { useState } from 'react';
import './Cart.css';
import Billing from './Billing';

const Cart = ({ cartItems, onRemove, onUpdateQuantity }) => {
  const [coupon, setCoupon] = useState('');
  const [checkout, setCheckout] = useState(false);

  const handleQuantityChange = (event, index) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) { 
      onUpdateQuantity(index, newQuantity);
    }
  };

  const handleApplyCoupon = () => {
   
    console.log(`Applying coupon: ${coupon}`);
  };

  const parsePrice = (price) => {
    return parseFloat(price.replace(/[^0-9.-]+/g, ''));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = parsePrice(item.price);
    return total + itemPrice * item.quantity;
  }, 0);

  const handleCheckout = () => {
    setCheckout(true); 
  };
  if (checkout) {
    return <Billing onSubmit={(billingDetails) => console.log(billingDetails)} />;
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="cart-product">
                  <img src={item.image} alt={item.name} className="product-image" />
                  <span>{item.name}</span>
                </td>
                <td>£{parsePrice(item.price).toFixed(2)}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(event) => handleQuantityChange(event, index)}
                    className="quantity-input"
                  />
                </td>
                <td>£{(parsePrice(item.price) * item.quantity).toFixed(2)}</td>
                <td>
                  <button onClick={() => onRemove(index)} className="remove-button">X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <div className="cart-actions">
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Coupon code"
          className="coupon-input"
        />
        <button onClick={handleApplyCoupon} className="apply-coupon-button">Apply Coupon</button>
      </div>

      <div className="cart-totals">
        <h3>Cart Totals</h3>
        <p>Subtotal: £{totalPrice.toFixed(2)}</p>
        <p>Total: £{totalPrice.toFixed(2)}</p>
        <button onClick={handleCheckout} className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};


export default Cart;
