import React from 'react';
import './Footer.css'; // Make sure to create this CSS file
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Need Help</h3>
          <ul>
            <li><a href="#about-us">About us</a></li>
            <li><a href="#our-story">Our story</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#affiliates">Affiliates</a></li>
            <li><a href="#visit-us">Visit us</a></li>
            <li><a href="#stores">Stores</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li><a href="#about-us">About us</a></li>
            <li><a href="#our-story">Our story</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#affiliates">Affiliates</a></li>
            <li><a href="#visit-us">Visit us</a></li>
            <li><a href="#stores">Stores</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Useful Info</h3>
          <ul>
            <li><a href="#about-us">About us</a></li>
            <li><a href="#our-story">Our story</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#affiliates">Affiliates</a></li>
            <li><a href="#visit-us">Visit us</a></li>
            <li><a href="#stores">Stores</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Subscribe to our newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="your.address@email.com" />
            <button type="submit">Join Now</button>
          </form>
          <div className="social-icons">
            <span>We're social</span>
            <div className="icons">
              <a href="#instagram"><FaInstagram/></a>
              <a href="#Faceboook"><FaFacebook/></a>
              <a href="#Twitter"><FaTwitter/></a>


              
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2019. All rights reserved by Hogash Studio.</p>
      </div>
    </footer>
      </>
  );
};

export default Footer;
