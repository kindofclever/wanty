import React from 'react';

import { AiFillGithub, AiFillHeart } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Wanty, cool that you are here</p>
      <p className='icons'>
        <a href='https://sandragufler.se'>
          <AiFillHeart />
        </a>
        <a href='https://www.linkedin.com/in/sandragufler/'>
          <AiFillGithub />
        </a>
      </p>
    </div>
  );
};

export default Footer;
