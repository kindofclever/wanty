import React from 'react';
import product from '../sanity_wanty/schemas/product';

const Home = () => {
  return (
    <>
      HeroBanner
      <div className="products-heading">
        <h2>Find out more about our most wanted products</h2>
        <p>We love nice things!</p>
      </div>
      <div className="products-container">
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>
      Footer
    </>
  );
};

export default Home;
