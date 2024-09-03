import React from 'react';
import './Header.css';
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = ({ cartItems }) => {
  return (
    <header className="header">
      <button className="mobile-search-icon">
        <FaSearch />
      </button>

      <div className="header-logo">
        <img src="/Images/logo.png" alt="Logo" />
      </div>

     

      <div className="header-search-offer">
        <div className="header-search">
          <input type="text" placeholder="Search..." />
          <button className="search-icon">
            <FaSearch />
          </button>
        </div>
        <div className="header-offer-cart">
          <button className="limited-offer">Limited Offer!</button>
          <div className="cart">
            {/* <span className="limited-offer"><FaCartPlus /></span> */}
            <Link to="/cart" className="limited-offer">MY CART ({cartItems.length}) </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
