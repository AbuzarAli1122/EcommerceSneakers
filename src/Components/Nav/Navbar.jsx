import React,{useState} from 'react';
import './Navbar.css';
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <button className="menu-icon" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-items ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/men">Men</NavLink></li>
        <li><NavLink to="/women">Women</NavLink></li>
        <li><NavLink to="/kids">Kids</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;