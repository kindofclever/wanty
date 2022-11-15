import React from 'react';

import { Product, FooterBanner, HeroBanner } from '../components';
import { client } from '../lib/client';

export const getServerSideProps = async () => {
  const queryProducts = '*[_type=="product"]';
  const products = await client.fetch(queryProducts);
  const queryBanner = '*[_type=="banner"]';
  const bannerData = await client.fetch(queryBanner);

  return { props: { products, bannerData } };
};

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className='products-heading'>
        <h2>Find out more about our most wanted products</h2>
        <p>We love nice things!</p>
      </div>
      <div className='products-container'>
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
          />
        ))}
      </div>
      <FooterBanner />
    </div>
  );
};

export default Home;
