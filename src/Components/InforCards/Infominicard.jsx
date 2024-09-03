import React from 'react';
import './infominicard.css';


const cards = [
  {
    icon: '/Images/free-delivery.png',
    title: 'FREE SHIPPING',
    description: 'Free worldwide shipping on all orders over $100',
  },
  {
    icon: '/Images/return-box.png',
    title: '30 DAYS RETURN',
    description: 'Returning your order for free is easy: just send us an email',
  },
  {
    icon: '/Images/gift-card.png',
    title: 'GIFT CARDS',
    description: 'Give something extraordinary with our gift cards',
  },
  {
    icon: '/Images/handshake.png',
    title: 'NEED ADVICE? ASK US!',
    description: 'Or call us on: +45 3 4564 2355',
  },
];

const InfoCards = () => {
  return (
    <div className="info-cards-container">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.icon} alt={card.title} className="card-icon" />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
