import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-4'>
            <h3 style={{ fontSize: '3rem' }}>
              <i>NEEZER</i>
              <i style={{ color: '#fc7404' }}>CHAIN</i>
            </h3>
            <br /> <br />
            <p style={{ fontSize: '0.85rem', lineHeight: '1.5rem' }}>
              Neezerchain Ideas and Solutions Limited <br />
              Emcel Courts, Lekki Conservation Road, <br />
              Lagos, Nigeria. <br />
              info@neezerchain.com <br /> +234 817 658 3177
            </p>
          </div>
          <div className='col-lg-2 col-md-2 footer-list'>
            <ul style={{ listStyleType: 'none' }}>
              <li>
                <i>Company</i>
              </li>
              <li>Our Services</li>
              <li>Our Products</li>
              <li>Our People</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className='col-lg-2 col-md-2 footer-list'>
            <ul style={{ listStyleType: 'none' }}>
              <li>
                <i>Services</i>
              </li>
              <li>Consultancy</li>
              <li>Web Design & Development</li>
              <li>Digital Marketing</li>
              <li>Fintech Solution</li>
              <li>Application Development</li>
            </ul>
          </div>
          <div className='col-lg-2 col-md-2 footer-list'>
            <ul style={{ listStyleType: 'none' }}>
              <li>
                <i>Products</i>
              </li>
              <li>Coinchain</li>
              <li>Neezerchain</li>
              <li>Neezergreene</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
