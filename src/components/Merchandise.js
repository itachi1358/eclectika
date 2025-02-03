import React from 'react';
import './Merchandise.css';
import merch from '../assets/Merch.png';

export default function Merchandise() {
  return (
    <div className="merchandise-wrapper">
      <div className="title">
        <h1>Merchandise</h1>
      </div>
      <div className="contentq">
        <div className="image">
          <img src={merch} alt="Merchandise" />
        </div>
        <div className="description">
          <p>
            Show your passion for Eclectika with our exclusive merchandise! Crafted from 
            premium-quality materials, our merchandise is designed for durability and style. 
            Whether you’re after casual wear for everyday comfort or a bold statement piece 
            to stand out, our collection offers something for everyone. Celebrate the spirit 
            of Eclectika and make it a part of your journey with apparel that’s as unique 
            and vibrant as the fest itself!
          </p>
        </div>
        <div className="btn-p">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScXa4Kpgkwq5OnXXssr5cB8I0kOIDHOn9ElJF6P4vd-AdbyKw/viewform">
            <button>Check out!!</button>
          </a>
        </div>
      </div>
    </div>
  );
}
