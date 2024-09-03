import React from 'react';
import './Contact.css';

const ContactCard = ({ image, city, address }) => {
  return (
    <>
   
    <div className="contact-card">
      <div className="image-container">
        <img src={image} alt={city} />
        <div className="overlay">
          <div className="text">
            <h3>{city}</h3>
            <p>{address}</p>
            <a href="#get-directions">get directions</a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

const Contact = () => {
  const contactData = [
    {
      city: 'London',
      address: '61 Wellfield Road\nRoath\nLondon',
      image: '/Images/contactimg1.jpg',
    },
    {
      city: 'Berlin',
      address: 'Kurfürstendamm 80\nMecklenburg-Vorpommern\nBerlin',
      image: '/Images/contactimg2.jpg',
    },
    {
      city: 'Paris',
      address: '54 Square de la Couronne\nÎle-de-France\nParis',
      image: '/Images/contactimg3.jpg',
    },
  ];

  return (
    <>
     <div className='head'> Visit Us</div>
    <div className="contact-page">
      {contactData.map((contact, index) => (
        <ContactCard key={index} {...contact} />
      ))}
    </div>
      </>
  );
};

export default Contact;
