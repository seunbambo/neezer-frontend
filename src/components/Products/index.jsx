import React from 'react';
import Zoom from 'react-reveal/Zoom';

import './styles.css';
import neezerlinkLogo from '../../assets/Neezerlink.png';
import neezerGreeneLogo from '../../assets/NeezerGreene-logo.png';
import coinchainLogo from '../../assets/coinchain.png';

const Products = () => {
  return (
    <section className='section-four'>
      <div className='container'>
        <div className='row col-lg-12 col-md-12 mx-auto'>
          <div className='col-lg-12 col-md-12 mt-4 mb-5'>
            {/* <!-- <u className="text-center"><h4>OUR PRODUCTS</h4></u> --> */}

            <h4 className='text-center'>
              OU
              <span
                style={{
                  borderBottom: '0.2rem solid #636363',
                  fontWeight: '900',
                }}
              >
                R P
                <span
                  style={{
                    borderBottom: '0.4rem solid #fc7404',
                    borderRadius: '6px',
                  }}
                >
                  ROD
                </span>
                UC
              </span>
              TS
            </h4>
          </div>

          <Zoom duration={500} delay={500}>
            <div className='col-lg-3 col-md-4 my-3 card mx-auto text-center'>
              <figure className='figure mx-auto'>
                <img
                  className='product-logo'
                  src={coinchainLogo}
                  alt='neezerlink'
                />
                <figcaption className='figure-caption'>
                  <br />
                  <b>COINCHAIN</b>
                </figcaption>
              </figure>
              A digitized platform to help users buy, sell, store digital
              currencies seamlessly
              <br />
              <br />
              <a
                href='https://coinchain.africa/'
                target='_blank'
                className='read-more'
              >
                Learn more
              </a>
            </div>
          </Zoom>

          <Zoom duration={500}>
            <div className='col-lg-3 col-md-4 my-3 card mx-auto text-center'>
              <figure className='figure mx-auto'>
                <img
                  className='product-logo'
                  src={neezerGreeneLogo}
                  alt='neezerlink'
                />
                <figcaption className='figure-caption'>
                  <br />
                  <b>NEEZERGREENE</b>
                </figcaption>
              </figure>
              A social company with focus on sustainable and clean energy to
              help improve the quality of life for households and businesses
              <br />
              <br />
              <a href='#' className='read-more'>
                Learn more
              </a>
            </div>
          </Zoom>

          <Zoom duration={500} delay={500}>
            <div className='col-lg-3 col-md-4 my-3 card mx-auto text-center'>
              <figure className='figure mx-auto'>
                <img
                  className='product-logo'
                  src={neezerlinkLogo}
                  alt='neezerlink'
                />
                <figcaption className='figure-caption'>
                  <br />
                  <b>NEEZERLINK</b>
                </figcaption>
              </figure>
              An online travel agency providing convenient and reliable travel
              management and consultancy
              <br />
              <br />
              <a
                href='http://neezerlink.com'
                target='_blank'
                className='read-more'
              >
                Learn more
              </a>
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default Products;
