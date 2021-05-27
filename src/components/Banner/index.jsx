import React from 'react';
import Slide from 'react-reveal/Slide';
import './styles.css';

const Banner = () => {
  return (
    <div className='container banner-text'>
      <Slide right>
        <h1>Delivering Innovative</h1>
      </Slide>
      <Slide right delay={100}>
        <h1>Software and</h1>
      </Slide>
      <Slide right delay={200}>
        <h1>Branding Solutions</h1>
      </Slide>

      <br />
      <Slide left delay={300}>
        <p className='banner-normal-text'>Technology + Creativity + Strategy</p>
      </Slide>
      <Slide left delay={400}>
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
      </Slide>
    </div>
  );
};

export default Banner;
