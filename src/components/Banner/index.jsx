import React from 'react';
import './styles.css';

const Banner = () => {
  return (
    <div className='container banner-text'>
      <h1 className=''>
        Delivering Innovative <br />
        Software and <br />
        Branding Solutions
      </h1>
      <br />
      <p className='banner-normal-text'>Technology + Creativity + Strategy</p>
      <a
        className='custom-link nav-link waves-effect waves-light'
        href='#quote'
      >
        <input
          className='btn quote mx-auto'
          style={{ padding: '12px 30px' }}
          type='button'
          value='Get a Free Quote'
        />
      </a>
    </div>
  );
};

export default Banner;
