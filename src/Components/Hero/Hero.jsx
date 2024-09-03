import React, { useEffect, useState } from 'react';
import './Hero.css';

const images = [
  '/Images/sneaker2-1.png',
  '/Images/sneaker-1.png',
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const shoeImage = document.querySelector('.shoe-img');
    shoeImage.classList.add('slide-up');
  }, [currentImage]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="hero-container">
      <div className={currentImage === 0 ? 'green-circle' : 'orange-circle'}></div>
      <div className="hero-content">
        <div className="left-section">
          <h2>$140 <span className='hr12'>    <hr />          </span></h2>
          <button className="more-btn">More</button>
        </div>
        <img src={images[currentImage]} alt="Sneaker" className="shoe-img" />
        <div className="right-section">
          <h3>AIR FORCE <br /> ONE MID</h3>
          <div className="arrows">
            <button onClick={prevImage} className="arrow-btn" >&#9664;</button>
            <button onClick={nextImage} className="arrow-btn">&#9654;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
