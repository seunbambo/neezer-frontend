import React from 'react';
import './styles.css';
import logo from '../../assets/logo.png';
import banner from '../../assets/banner.png';

const NavBar = () => {
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
        zIndex: '-1',
      }}
    >
      <nav className='navbar navbar-expand-lg color-dark navbar'>
        {/* <nav className='navbar navbar-expand-lg color-dark fixed-top navbar'> */}
        <div className='container'>
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
            <ul className='navbar-nav ml-auto' style={{ zIndex: '2' }}>
              <li className='nav-item active'>
                <a
                  className='custom-link nav-link waves-effect waves-light'
                  href='#home'
                >
                  Home
                  <span className='sr-only'></span>
                </a>
              </li>

              <li className='nav-item'>
                <a
                  className='custom-link nav-link waves-effect waves-light'
                  href='#about-us'
                >
                  About Us
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='custom-link nav-link waves-effect waves-light'
                  href='#our-people'
                >
                  Our People
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='custom-link nav-link waves-effect waves-light'
                  href='#contact-us'
                >
                  Contact Us
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='custom-link nav-link waves-effect waves-light'
                  href='#career'
                >
                  Career
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='custom-link nav-link waves-effect waves-light'
                  href='#blog'
                >
                  Blog
                </a>
              </li>
              <li className='nav-item'>
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
