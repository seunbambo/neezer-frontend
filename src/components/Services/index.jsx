import React from 'react';
import './styles.css';
import softwareDevIcon from '../../assets/software-dev-icon.png';
import webDesignIcon from '../../assets/web-design-icon.png';
import socialMarketingIcon from '../../assets/social-marketing.png';
import fintechIcon from '../../assets/fintech-solution.png';
import consultIcon from '../../assets/consult-icon.png';

const Services = () => {
  return (
    <div className='section-three row mt-5 mx-auto'>
      <div className='container col-md-12 col-sm-12'>
        <div className='col-lg-12 col-md-12 col-sm-12 mx-auto'>
          {/* <!-- <u className="text-center"><h4>OUR SERVICES</h4></u> --> */}

          <h4 className='text-center'>
            O
            <span
              style={{
                borderBottom: '0.2rem solid #636363',
                fontWeight: '900',
              }}
            >
              UR
              <span
                style={{
                  borderBottom: '0.4rem solid #fc7404',
                  borderRadius: '6px',
                }}
              >
                {' '}
                SERVI
              </span>
              CE
            </span>
            S
          </h4>

          <p className='text-center my-5'>
            Our team of committed and dedicated professionals deliver
            exceptional services in diverse areas
          </p>
        </div>
        {/* <!-- <div className="container"> --> */}

        {/* <!-- <div className="col-lg-12 col-md-12"> --> */}
        <div
          className='col-lg-12 col-md-12 row'
          style={{ lineHeight: '1.7rem' }}
        >
          <figure className='figure col-lg-4 col-md-4'>
            <img
              src={softwareDevIcon}
              className='figure-img img-fluid rounded mx-auto services-icon'
              alt=''
            />
            <figcaption className='figure-caption text-center'>
              <b>
                Software Application and <br />
                Development
              </b>
              <br />
              <a href='#' className='read-more'>
                Read more...
              </a>
            </figcaption>
          </figure>
          <figure className='figure col-lg-4 col-md-4'>
            <img
              className='figure-img img-fluid mx-auto rounded services-icon'
              src={webDesignIcon}
              alt='web-design-icon'
            />
            <figcaption className='figure-caption text-center'>
              <b>
                Web Design and Cooperate <br />
                Systems
              </b>
              <br />
              <a href='#' className='read-more'>
                Read more...
              </a>
            </figcaption>
          </figure>
          <figure className='figure col-lg-4 col-md-4'>
            <img
              className='figure-img img-fluid mx-auto rounded services-icon'
              src={socialMarketingIcon}
              alt='software-development-icon'
            />
            <figcaption className='figure-caption text-center'>
              <b>
                Digital Branding and <br />
                Market Strategy
              </b>
              <br />
              <a href='#' className='read-more'>
                Read more...
              </a>
            </figcaption>
          </figure>

          {/* <!-- </div> --> */}
        </div>

        <div
          className='container col-lg-12 col-md-12 mt-5'
          style={{ lineHeight: '1.7rem' }}
        >
          <div className='row col-lg-12 col-md-12 mx-auto'>
            <div className='col-lg-2 col-md-2'></div>
            <figure className='figure col-lg-4 col-md-4'>
              <img
                className='figure-img img-fluid mx-auto rounded services-icon'
                src={fintechIcon}
                alt='software-development-icon'
              />
              <figcaption className='figure-caption text-center'>
                <b>Fintech Solutions</b>
                <br />
                <a href='#' className='read-more'>
                  Read more...
                </a>
              </figcaption>
            </figure>
            <figure className='figure col-lg-4 col-md-4'>
              <img
                className='figure-img img-fluid mx-auto rounded services-icon'
                src={consultIcon}
                alt='software-development-icon'
              />
              <figcaption className='figure-caption text-center'>
                <b>Consulting Services</b>
                <br />
                <a href='#' className='read-more'>
                  Read more...
                </a>
              </figcaption>
            </figure>
            <div className='col-lg-2 col-md-2'></div>
          </div>
        </div>
      </div>
      {/* <!-- </div> --> */}
    </div>
  );
};

export default Services;
