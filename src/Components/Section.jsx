import React from 'react';
import './Css/Section.css'; 

const Section = () => {
  return (
    <div className="section-container">
      <div className="section-image-left">
        <img src="/Images/img_29.jpg" alt="Left Image" />
      </div>
      <div className="section-text-center">
        <p className="small-text">WINTER NEW ARRIVALS</p>
        <h1>New Season <br /> New Collection</h1>
        <button className="shop-now-button">SHOP NOW</button>
      </div>
      <div className="section-image-right">
        <img src="/Images/img_30.jpg" alt="Right Image" />
      </div>
    </div>
  );
};

export default Section;
