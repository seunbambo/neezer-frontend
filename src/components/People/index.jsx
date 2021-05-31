import React from 'react';
import Slide from 'react-reveal/Slide';

import './styles.css';
import Ayo from '../../assets/staffs/Ayo.png';
import Dapo from '../../assets/staffs/dapo.png';
import Odun from '../../assets/staffs/Odunola.png';
import Hope from '../../assets/staffs/Hope.png';

const People = () => {
  return (
    <section className='section-seven py-5' id='our-people'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 text-center'>
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
                  EO
                </span>
                P
              </span>
              LE
            </h4>

            <div className='col-lg-12 col-md-12 my-5'>
              <p className='text-center'>
                We pride ourselves with a team of experienced developers,
                designers and marketers who help build sustainable solutions.
              </p>
            </div>
            <div className='row col-lg-12 col-md-12 mx-auto'>
              {/* <!-- <div className="col-lg-2 col-md-2"></div> --> */}
              <Slide right>
                <figure className='figure col-lg-3 col-md-3'>
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
              </Slide>

              <Slide right delay={200}>
                <figure className='figure col-lg-3 col-md-3'>
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
              </Slide>

              <Slide right delay={400}>
                <figure className='figure col-lg-3 col-md-3'>
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
              </Slide>

              <Slide right delay={600}>
                <figure className='figure col-lg-3 col-md-3'>
                  <img
                    className='figure-img img-fluid mx-auto rounded staff-images'
                    src={Hope}
                    alt='software-development-icon'
                  />
                  <figcaption className='figure-caption text-center'>
                    <b>Hop Atogi</b>
                    <br />
                    <a href='#' className='read-more'>
                      Human Resources
                    </a>
                  </figcaption>
                </figure>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;
