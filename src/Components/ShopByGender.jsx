
import React from 'react';
import './Css/ShopByGender.css';

const ShopByGender = () => {
    return (
        <div className="shop-by-gender">
            <div className="shop-title">
                <h2>Shop by gender</h2>
            </div>
            <div className="shop-grid">
                <div className="shop-item men-footwear">
                    <img src="/Images/img_26.jpg" alt="Men Footwear" />
                    <p>MEN FOOTWEAR</p>
                </div>
                <div className="shop-item women-footwear">
                    <img src="/Images/img_27.jpg" alt="Women Footwear" />
                    <p>WOMEN FOOTWEAR</p>
                </div>
                <div className="shop-item kids-footwear">
                    <img src="/Images/img_28.jpg" alt="Kids Footwear" />
                    <p>KIDS FOOTWEAR</p>
                </div>
            </div>
            <div className="subscribe-section">
                <p>Subscribe to receive offers</p>
                <div className="subscribe-form">
                    <input type="email" placeholder="your.address@email.com" />
                    <button>Join Now</button>
                </div>
            </div>
        </div>
    );
}

export default ShopByGender;
