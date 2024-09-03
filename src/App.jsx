import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';


import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Nav/Navbar';
import Infominicard from "./Components/InforCards/Infominicard"
import ProductList from './Components/ProductList/Productlist';
import ShopByGender from './Components/ShopByGender';
import Section from './Components/Section';
import Footer from './Components/Footer/Footer';
import Contact from "./Components/Nav/Contact"
import MenProducts from './Components/Menproduct';
import WomenProducts from './Components/Womenproduct';
import KidsProducts from './Components/KidsProduct';
import Details from './Components/Details';
import Cart from './Components/Cart';



const products = [
    {
      id: 1,
      name: 'Nike SF Air ',
      price: '£180.00',
      image: '/Images/product 1.jpg',  
      hoverImages: ['/Images/product 1 hover.jpg'],
    },
    {
      id: 2,
      name: 'Nike SF Air Force 1',
      price: '£180.00',
      image: '/Images/product 2.jpg',  
      hoverImages: ['/Images/product 2 hover.jpg'],
    },
    
    {
      id: 3,
      
      name: 'Nike SF 1',
      price: '£200.00',
      image: '/Images/product 3.jpg',  
      hoverImages: ['/Images/product 3 hover.jpg'],
    },
    {
      id: 4,
      name: 'Yung 96 Trainer',
      price: '£49.00',
      image: '/Images/product 4.jpg', 
      hoverImages: [ '/Images/product 4 hover.jpg'],
    },
    {
      id: 5,
      name: 'Nike SF Air Force 1',
      price: '£180.00',
      image: '/Images/product 5.jpg',  
      hoverImages: ['/Images/product 5 hover.jpg'],
    },
    {
      id: 7,
      name: 'Nike SF Air ',
      price: '£180.00',
      image: '/Images/product 7.jpg',  
      hoverImages: ['/Images/product 7 hover.jpg'],
    },
    {
      id: 8,
      name: 'Nike S',
      price: '£180.00',
      image: '/Images/product 8.jpg',  
      hoverImages: ['/Images/product 8 hover.jpg'],
    },
    {
      id: 9,
      name: 'Nike SF Air For',
      price: '£180.00',
      image: '/Images/product 9.jpg',  
      hoverImages: ['/Images/product 9 hover.jpg'],
    },
    {
      id: 10,
      name: 'Nike SF Ai',
      price: '£180.00',
      image: '/Images/product 10.jpg',  
      hoverImages: ['/Images/product 10 hover.jpg'],
    },
    {  
       id:11,
      name: 'Nike Lunar women',
      price: '£140.00',
      image: '/Images/product 9.jpg', 
    },
    {
      id:12,
      name: 'Nike SF  Air women',
      price: '£200.00',
      image: '/Images/product 7.jpg',  
    },
    {
      id:13,
      name: 'Yung 96 Trainer women',
      price: '£49.00',
      image: '/Images/product 8.jpg', 
    },
    {   id:14,
      name: 'Nike SF Air Force 1',
      price: '£180.00',
      image: '/Images/kidimg1.jpg',  
      
    },
    {
      id:15,
      name: 'Nike SF Air Force 1',
      price: '£180.00',
      image: '/Images/kidimg4.jfif',  
      
    },

    {
      id:16,
      name: 'Nike SF Air Force 1',
      price: '£180.00',
      image: '/Images/kidimg5.jpg',  
      
    },
    
    
  ];


  function App() {
    
    const [cartItems, setCartItems] = useState(() => {
      
      const savedCart = localStorage.getItem('cartItems');
      return savedCart ? JSON.parse(savedCart) : [];
    });
    useEffect(() => {
      
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

   
    const addToCart = (product) => {
      setCartItems((prevItems) => {
       
        const existingProductIndex = prevItems.findIndex(item => item.id === product.id);
        if (existingProductIndex !== -1) {
          
          const updatedItems = [...prevItems];
          updatedItems[existingProductIndex].quantity += 1;
          return updatedItems;
        } else {
          
          return [...prevItems, { ...product, quantity: 1 }];
        }
      });
    };
  
    const removeFromCart = (index) => {
      setCartItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems.splice(index, 1); 
        return updatedItems;
      });
    };
  
    const updateQuantity = (index, newQuantity) => {
      setCartItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems[index].quantity = newQuantity;
        return updatedItems;
      });
    };

    return (
        <Router>
            <Header  cartItems={cartItems} />
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <Infominicard />
                        <ShopByGender />
                        <Section />
                        <ProductList products={products} addToCart={addToCart} />
                    </>
                } />
                <Route path="/home" element={
                    <>
                        <Hero />
                        <Infominicard />
                        <ShopByGender />
                        <Section />
                        <ProductList products={products} addToCart={addToCart} />
                    </>
                } />

                {/* Product Details Route */}
        <Route path="/detail/:productId/:productName" element={<Details products={products} addToCart={addToCart}  />} />


                  {/* for contact page  */}

                <Route path="/contact" element={
                  <>
                  <Contact />
                  
                  </>
                  } />

                  {/* for Men Section  */}

                  <Route path="/men" element={
                  <>
                  <MenProducts addToCart={addToCart}/>

                  </>
                  } />
                   <Route path="/women" element={
                  <>
                  <WomenProducts products={products} addToCart={addToCart}/>
                  </>
                  } />
                   <Route path="/kids" element={
                  <>
                  <KidsProducts addToCart={addToCart}/>
                  </>
                  } />

                    <Route path="/cart" element={<Cart cartItems={cartItems} onRemove={removeFromCart} onUpdateQuantity={updateQuantity} />} />
            </Routes>
            <Footer />
        </Router>
    );
}
  

export default App;
