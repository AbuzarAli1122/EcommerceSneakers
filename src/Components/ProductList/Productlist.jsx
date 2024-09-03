import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState('latest');
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0); 
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleProductClick= (products)=>{
    navigate(`/product/${ product.id}`);
  }
  

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <button
          onClick={() => handleCategoryChange('latest')}
          className={activeCategory === 'latest' ? 'active' : ''}
        >
          Latest Added
        </button>
        <button
          onClick={() => handleCategoryChange('most-wanted')}
          className={activeCategory === 'most-wanted' ? 'active' : ''}
        >
          Most Wanted
        </button>
      </div>
      <div className="product-list-carousel">
        <button className="arrow left-arrow" onClick={handlePrevClick}>
          &lt;
        </button>
        <div className="product-list">
          {products
            .slice(currentIndex, currentIndex + 6)
            .map((product, index) => (
              <div className="product-item" 
              key={index}
              onClick={() => handleProductClick(product)}>

          <Link to={`/detail/${product.id}/${(product.name)}`}>
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} />
                  <div className="hover-images">
                   
                    {product.hoverImages.map((image, idx) => (
                      <img key={idx} src={image}  />
                    ))}
                  </div>
                  
                  <div className="add-to-cart">
                    <button>More Info</button>
                  </div>
                </div>
                <p>{product.name}</p>
                <p>{product.price}</p>
                </Link>
              </div>
            ))}
        </div>
        <button className="arrow right-arrow" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductList;
