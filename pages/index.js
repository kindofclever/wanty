import React from 'react';

import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className='products-heading'>
        <h2>Find out more about our most wanted products</h2>
        <p>We love nice things!</p>
      </div>
      <div className='products-container'>
        {['Product 1', 'Product 2'].map((product) => (
          <Product />
        ))}
      </div>
      <FooterBanner />
    </div>
  );
};

export default Home;
