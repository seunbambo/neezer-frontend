import React from 'react';
import Slide from 'react-reveal/Slide';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './styles.css';
import Ayo from '../../assets/staffs/Ayo.png';
import Dapo from '../../assets/staffs/dapo.png';
import Odun from '../../assets/staffs/Odunola.png';
import Hope from '../../assets/staffs/Hope.png';
import Barakat from '../../assets/staffs/Barakay.png';
import Damilare from '../../assets/staffs/Damilare.png';
import Delight from '../../assets/staffs/Delight.png';
import Doyin from '../../assets/staffs/Doyin.png';
import Seun from '../../assets/staffs/Seun.png';

const People = () => {
  return (
    <section className='section-seven py-5' id='our-people'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 text-center'>
            <h4 className='text-center'>
              <span
                style={{
                  borderBottom: '0.2rem solid #636363',
                  fontWeight: '900',
                }}
              >
                OUR
                <span
                  style={{
                    borderBottom: '0.4rem solid #fc7404',
                    borderRadius: '6px',
                  }}
                >
                  {' '}
                  PEO
                </span>
                PLE
              </span>
            </h4>

            <div className='col-lg-12 col-md-12 my-5'>
              <p className='text-center'>
                We pride ourselves with a team of experienced developers,
                designers and marketers who help build sustainable solutions.
              </p>
            </div>
            <div className='row col-lg-12 col-md-12 mx-auto'>
              {/* <!-- <div className="col-lg-2 col-md-2"></div> --> */}
              <Carousel
                autoPlay
                infiniteLoop
                intervals='8000'
                transitionTime='1000'
                showArrows='false'
                showIndicators='false'
              >
                <div>
                  {/* <Slide right> */}
                  <figure className='figure col-lg-3 col-md-3 col-sm-12 col-xs-12'>
                    <img
                      className='figure-img img-fluid mx-auto rounded staff-images'
                      src={Ayo}
                      alt='software-development-icon'
                    />
                    <figcaption className='figure-caption text-center'>
                      <b>Oluwatosin Akomolafe</b>
                      <br />
                      <a href='#' className='read-more'>
                        MD/CEO
                      </a>
                    </figcaption>
                  </figure>
                  {/* </Slide> */}

                  {/* <Slide right delay={200}> */}
                  <figure className='figure col-lg-3 col-md-3 col-sm-12 col-xs-12'>
                    <img
                      className='figure-img img-fluid mx-auto rounded staff-images'
                      src={Dapo}
                      alt='software-development-icon'
                    />
                    <figcaption className='figure-caption text-center'>
                      <b>Oladapo Oluseye</b>
                      <br />
                      <a href='#' className='read-more'>
                        Operations Manager
                      </a>
                    </figcaption>
                  </figure>
                  {/* </Slide> */}

                  {/* <Slide right delay={400}> */}
                  <figure className='figure col-lg-3 col-md-3 col-sm-12 col-xs-12'>
                    <img
                      className='figure-img img-fluid mx-auto rounded staff-images'
                      src={Odun}
                      alt='software-development-icon'
                    />
                    <figcaption className='figure-caption text-center'>
                      <b>Odunola Oyeyipo</b>
                      <br />
                      <a href='#' className='read-more'>
                        Branding & Communications Officer
                      </a>
                    </figcaption>
                  </figure>
                  {/* </Slide> */}

                  {/* <Slide right delay={600}> */}
                  <figure className='figure col-lg-3 col-md-3 col-sm-12 col-xs-12'>
                    <img
                      className='figure-img img-fluid mx-auto rounded staff-images'
                      src={Seun}
                      alt='software-development-icon'
                    />
                    <figcaption className='figure-caption text-center'>
                      <b>Oluwaseun Adebambo</b>
                      <br />
                      <a href='#' className='read-more'>
                        Full Stack/Blockchain Developer
                      </a>
                    </figcaption>
                  </figure>
                  {/* </Slide> */}
                </div>

                <div>
                  {/* <Slide right> */}
                  <figure className='figure col-lg-3 col-md-3 col-sm-12 col-xs-12'>
                    <img
                      className='figure-img img-fluid mx-auto rounded staff-images'
                      src={Ayo}
                      alt='software-development-icon'
                    />
                    <figcaption className='figure-caption text-center'>
                      <b>Ayomide Akomolafe</b>
                      <br />
                      <a href='#' className='read-more'>
                        Product Specialist
                      </a>
                    </figcaption>
                  </figure>
                  {/* </Slide> */}

                  {/* <Slide right delay={200}> */}
                  <figure className='figure col-lg-3 col-md-3 col-sm-12 col-xs-12'>
                    <img
                      className='figure-img img-fluid mx-auto rounded staff-images'
                      src={Damilare}
                      alt='software-development-icon'
                    />
                    <figcaption className='figure-caption text-center'>
                      <b>Damilare Oladipo</b>
                      <br />
                      <a href='#' className='read-more'>
                        UI/UX Designer
                      </a>
                    </figcaption>
                  </figure>
                  {/* </Slide> */}

                  {/* <Slide right delay={400}> */}
                  <figure className='figure col-lg-3 col-md-3 col-sm-12 col-xs-12'>
                    <img
                      className='figure-img img-fluid mx-auto rounded staff-images'
                      src={Doyin}
                      alt='software-development-icon'
                    />
                    <figcaption className='figure-caption text-center'>
                      <b>Doyinsola Omotosho</b>
                      <br />
                      <a href='#' className='read-more'>
                        Accountant
                      </a>
                    </figcaption>
                  </figure>
                  {/* </Slide> */}

                  {/* <Slide right delay={600}> */}
                  <figure className='figure col-lg-3 col-md-3 col-sm-12 col-xs-12'>
                    <img
                      className='figure-img img-fluid mx-auto rounded staff-images'
                      src={Delight}
                      alt='software-development-icon'
                    />
                    <figcaption className='figure-caption text-center'>
                      <b>Delight Gbujie</b>
                      <br />
                      <a href='#' className='read-more'>
                        Customer Service Representative
                      </a>
                    </figcaption>
                  </figure>
                  {/* </Slide> */}
                </div>
                <div>
                  {/* <Slide right delay={600}> */}
                  <figure className='figure col-lg-3 col-md-3 col-sm-12 col-xs-12'>
                    <img
                      className='figure-img img-fluid mx-auto rounded staff-images'
                      src={Barakat}
                      alt='software-development-icon'
                    />
                    <figcaption className='figure-caption text-center'>
                      <b>Barakat Salam</b>
                      <br />
                      <a href='#' className='read-more'>
                        Executive Assistant
                      </a>
                    </figcaption>
                  </figure>
                  {/* </Slide> */}

                  {/* <Slide right delay={600}> */}
                  <figure className='figure col-lg-3 col-md-3 col-sm-12 col-xs-12'>
                    <img
                      className='figure-img img-fluid mx-auto rounded staff-images'
                      src={Hope}
                      alt='software-development-icon'
                    />
                    <figcaption className='figure-caption text-center'>
                      <b>Hope Atogi</b>
                      <br />
                      <a href='#' className='read-more'>
                        HR Officer
                      </a>
                    </figcaption>
                  </figure>
                  {/* </Slide> */}
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;
