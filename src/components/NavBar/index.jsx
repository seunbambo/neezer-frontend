import React from 'react';
import { scroller } from 'react-scroll';
import './styles.css';
import logo from '../../assets/icon.png';
import banner from '../../assets/banner.png';

const NavBar = () => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150,
    });
  };

  return (
    <div
      classNameName='section-one'
      style={{
        backgroundImage: `url(${banner})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'absolute',
        width: '100%',
        height: '700px',
        // zIndex: '0',
      }}
    >
      <nav
        className='navbar navbar-expand-lg color-dark fixed-top navbar'
        style={{ zIndex: '999999' }}
      >
        {/* <nav className='navbar navbar-expand-lg color-dark fixed-top navbar'> */}
        <div className='container' style={{ zIndex: '999999' }}>
          <a className='custom-link navbar-brand' href='#'>
            <img src={logo} alt='logo' className='logo' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent-4'
            aria-controls='navbarSupportedContent-4'
            aria-expanded='false'
            aria-label='Toggle navigation'
            style={{ color: '#000', border: '1px solid #000' }}
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse'
            id='navbarSupportedContent-4'
          >
            <ul className='navbar-nav ml-auto' style={{ zIndex: '999999' }}>
              <li className='nav-item' onClick={() => scrollToElement('home')}>
                <a
                  className='custom-link nav-link waves-effect waves-light'
                  href='#home'
                >
                  Home
                </a>
              </li>
              <li
                className='nav-item'
                onClick={() => scrollToElement('services')}
              >
                <a
                  className='custom-link nav-link waves-effect waves-light'
                  href='#services'
                >
                  Services
                </a>
              </li>

              <li
                className='nav-item'
                onClick={() => scrollToElement('products')}
              >
                <a
                  className='custom-link nav-link waves-effect waves-light'
                  href='#products'
                >
                  Products
                </a>
              </li>

              <li
                className='nav-item'
                onClick={() => scrollToElement('approach')}
              >
                <a
                  className='custom-link nav-link waves-effect waves-light'
                  href='#approach'
                >
                  Approach
                </a>
              </li>
              <li
                className='nav-item'
                onClick={() => scrollToElement('people')}
              >
                <a
                  className='custom-link nav-link waves-effect waves-light'
                  href='#people'
                >
                  Our People
                </a>
              </li>

              <li
                className='nav-item'
                onClick={() => scrollToElement('careers')}
              >
                <a
                  className='custom-link nav-link waves-effect waves-light'
                  href='#career'
                >
                  Careers
                </a>
              </li>
              <li className='nav-item' onClick={() => scrollToElement('blog')}>
                <a
                  className='custom-link nav-link waves-effect waves-light'
                  href='#blog'
                >
                  Blog
                </a>
              </li>
              <li
                className='nav-item'
                onClick={() => scrollToElement('contact')}
              >
                <a
                  className='custom-link nav-link waves-effect waves-light'
                  href='#contact-us'
                >
                  Contact Us
                </a>
              </li>
              <li className='nav-item' onClick={() => scrollToElement('quote')}>
                <a
                  className='custom-link nav-link waves-effect waves-light'
                  href='#quote'
                >
                  <input
                    className='btn quote'
                    type='button'
                    value='Get a Free Quote'
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
