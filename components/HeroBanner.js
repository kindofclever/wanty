import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image).width(500).url()}
          alt='keyboard'
          className='hero-banner-image'
        />
        <div>
          <div className='desc'>
            <h5>{heroBanner.desc}</h5>
            <p>WE LOVE FANCY PRODUCTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
