import React from 'react';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

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
          <Slide left>
            <figure className='figure col-lg-4 col-md-4 my-2'>
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

                <a
                  href='#'
                  class='read-more'
                  data-toggle='modal'
                  data-target='#softwareDevelopment'
                >
                  Read more...
                </a>
              </figcaption>
            </figure>
          </Slide>
          {/* Modal */}
          <div
            class='modal fade'
            id='softwareDevelopment'
            tabindex='-1'
            role='dialog'
            aria-labelledby='softwareDevelopmentTitle'
            aria-hidden='true'
          >
            <div class='modal-dialog modal-dialog-centered' role='document'>
              <div class='modal-content'>
                <div class='modal-header'>
                  <h5 class='modal-title' id='exampleModalLongTitle'>
                    Software Application and Development
                  </h5>
                  <button
                    type='button'
                    class='close'
                    data-dismiss='modal'
                    aria-label='Close'
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div class='modal-body'>
                  We offer digitized platforms to give users the convenience of
                  pre-loading digital currencies into their wallets, thus
                  enhancing online and offline transactions with merchants who
                  accept such currencies as means of payment.
                </div>
              </div>
            </div>
          </div>

          <Zoom delay={500}>
            <figure className='figure col-lg-4 col-md-4 my-2'>
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

                <a
                  href='#'
                  class='read-more'
                  data-toggle='modal'
                  data-target='#webDesign'
                >
                  Read more...
                </a>
              </figcaption>
            </figure>
          </Zoom>
          {/* Modal */}
          <div
            class='modal fade'
            id='webDesign'
            tabindex='-1'
            role='dialog'
            aria-labelledby='webDesignTitle'
            aria-hidden='true'
          >
            <div class='modal-dialog modal-dialog-centered' role='document'>
              <div class='modal-content'>
                <div class='modal-header'>
                  <h5 class='modal-title' id='exampleModalLongTitle'>
                    Web Design and Cooperate Systems
                  </h5>
                  <button
                    type='button'
                    class='close'
                    data-dismiss='modal'
                    aria-label='Close'
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div class='modal-body'>
                  We offer web design, development, security assurance, service
                  integration and maintenance services to deliver maximum value
                  and ensure a prominent online presence for our clients. We
                  also build intranets and corporate web-based systems that help
                  enterprises automate processes, increase productivity and
                  facilitate workflow management.
                </div>
              </div>
            </div>
          </div>

          <Slide right>
            <figure className='figure col-lg-4 col-md-4 my-2'>
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
                <a
                  href='#'
                  class='read-more'
                  data-toggle='modal'
                  data-target='#digitalMarketing'
                >
                  Read more...
                </a>
              </figcaption>
            </figure>
          </Slide>

          {/* Modal */}
          <div
            class='modal fade'
            id='digitalMarketing'
            tabindex='-1'
            role='dialog'
            aria-labelledby='digitalMarketingTitle'
            aria-hidden='true'
          >
            <div class='modal-dialog modal-dialog-centered' role='document'>
              <div class='modal-content'>
                <div class='modal-header'>
                  <h5 class='modal-title' id='exampleModalLongTitle'>
                    Digital Branding and Market Strategy
                  </h5>
                  <button
                    type='button'
                    class='close'
                    data-dismiss='modal'
                    aria-label='Close'
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div class='modal-body'>
                  We offer digital transformation services to help successfully
                  achieve your business goals, save time and create strategies
                  that deliver outstanding results.
                </div>
              </div>
            </div>
          </div>

          {/* <!-- </div> --> */}
        </div>

        <div
          className='container col-lg-12 col-md-12 mt-5'
          style={{ lineHeight: '1.7rem' }}
        >
          <div className='row col-lg-12 col-md-12 mx-auto'>
            <div className='col-lg-2 col-md-2'></div>
            <Slide left>
              <figure className='figure col-lg-4 col-md-4 my-2'>
                <img
                  className='figure-img img-fluid mx-auto rounded services-icon'
                  src={fintechIcon}
                  alt='software-development-icon'
                />
                <figcaption className='figure-caption text-center'>
                  <b>Fintech Solutions</b>
                  <br />

                  <a
                    href='#'
                    class='read-more'
                    data-toggle='modal'
                    data-target='#fintechSolutions'
                  >
                    Read more...
                  </a>
                </figcaption>
              </figure>
            </Slide>
            {/* Modal */}
            <div
              class='modal fade'
              id='fintechSolutions'
              tabindex='-1'
              role='dialog'
              aria-labelledby='fintechSolutionsTitle'
              aria-hidden='true'
            >
              <div class='modal-dialog modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLongTitle'>
                      Fintech Solutions
                    </h5>
                    <button
                      type='button'
                      class='close'
                      data-dismiss='modal'
                      aria-label='Close'
                    >
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    We offer digitized platforms to give users the convenience
                    of pre-loading digital currencies into their wallets, thus
                    enhancing online and offline transactions with merchants who
                    accept such currencies as means of payment.{' '}
                  </div>
                </div>
              </div>
            </div>

            <Slide right delay={200}>
              <figure className='figure col-lg-4 col-md-4 my-2'>
                <img
                  className='figure-img img-fluid mx-auto rounded services-icon'
                  src={consultIcon}
                  alt='software-development-icon'
                />
                <figcaption className='figure-caption text-center'>
                  <b>Consulting Services</b>
                  <br />
                  <a
                    href='#'
                    class='read-more'
                    data-toggle='modal'
                    data-target='#consultingServices'
                  >
                    Read more...
                  </a>
                </figcaption>
              </figure>
            </Slide>
            {/* Modal */}
            <div
              class='modal fade'
              id='consultingServices'
              tabindex='-1'
              role='dialog'
              aria-labelledby='consultingServicesTitle'
              aria-hidden='true'
            >
              <div class='modal-dialog modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLongTitle'>
                      Consulting Services
                    </h5>
                    <button
                      type='button'
                      class='close'
                      data-dismiss='modal'
                      aria-label='Close'
                    >
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    We have experts who are always happy to help and answer your
                    questions with respect to software consulting, digital
                    innovation, branding solutions, and more. We also offer
                    comprehensive strategy for digital and technological
                    transformation of our clients’ organisations, as may be
                    determined by business objectives.
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-2 col-md-2'></div>
          </div>
        </div>
      </div>
      {/* <!-- </div> --> */}
    </div>
  );
};

export default Services;
