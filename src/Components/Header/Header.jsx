import React from 'react';
import './Header.css';
import { FaSearch} from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';

const Header = ({ cartItems,isLogin, setIsLogin }) => {
const navigate = useNavigate();

const handleLogout = () => {
  // Perform any logout logic here (e.g., clearing tokens, resetting state)
  setIsLogin(false);
  navigate('/login');
};

const handleAuthClick = () => {
  if (isLogin) {
    handleLogout();
  } else {
    navigate('/login');  // Redirect to login or signup as per your logic
  }

  };
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
      
      <div className="auth-section">
        {isLogin ? (
          <button className="auth-button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <button className="auth-button" onClick={() => navigate('/login')}>
              Login
            </button>
            <button className="auth-button" onClick={() => navigate('/signup')}>
              Signup
            </button>
          </>
        )}
      </div>
      
    </header>
  );
};

export default Header;
