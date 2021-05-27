import React from 'react';
import Slide from 'react-reveal/Slide';

import './styles.css';
// import middleBackgroundImage from '../../assets/middle-2.svg';
import middleBackgroundImage from '../../assets/our-approach-bg.svg';

const Approach = () => {
  return (
    <section className='section-six'>
      <div className='container'>
        <div className='row '>
          <div className='col-lg-12 col-md-12 text-center'>
            <h4 className='text-center'>
              OU
              <span
                style={{
                  borderBottom: '0.2rem solid #636363',
                  fontWeight: '900',
                }}
              >
                R A
                <span
                  style={{
                    borderBottom: '0.4rem solid #fc7404',
                    borderRadius: '6px',
                  }}
                >
                  PPR
                </span>
                OA
              </span>
              CH
            </h4>
          </div>
          <div className='col-lg-4 col-md-4 mt-4 mb-5'>
            <div id='accordion'>
              <Slide left>
                <div className='special-card my-2'>
                  <div className='card-header' id='headingTwo'>
                    <h5 className='mb-0'>
                      <button
                        className='btn btn-link collapsed text-dark'
                        data-toggle='collapse'
                        data-target='#research'
                        aria-expanded='false'
                        aria-controls='research'
                      >
                        Research and Development
                      </button>

                      <b> </b>
                    </h5>
                  </div>
                  <div
                    id='research'
                    className='collapse'
                    aria-labelledby='headingTwo'
                    data-parent='#accordion'
                  >
                    <div className='card-body'>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor.
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide left delay={100}>
                <div className='special-card my-2'>
                  <div className='card-header' id='headingTwo'>
                    <h5 className='mb-0'>
                      <button
                        className='btn btn-link collapsed text-dark'
                        data-toggle='collapse'
                        data-target='#projectEvaluation'
                        aria-expanded='false'
                        aria-controls='projectEvaluation'
                      >
                        Project Evaluation
                      </button>

                      <b> </b>
                    </h5>
                  </div>
                  <div
                    id='projectEvaluation'
                    className='collapse'
                    aria-labelledby='headingTwo'
                    data-parent='#accordion'
                  >
                    <div className='card-body'>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor.
                    </div>
                  </div>
                </div>
              </Slide>

              <Slide left delay={200}>
                <div className='special-card my-2'>
                  <div className='card-header' id='headingTwo'>
                    <h5 className='mb-0'>
                      <button
                        className='btn btn-link collapsed text-dark'
                        data-toggle='collapse'
                        data-target='#projectsetup'
                        aria-expanded='false'
                        aria-controls='projectsetup'
                      >
                        Project Setup
                      </button>

                      <b> </b>
                    </h5>
                  </div>
                  <div
                    id='projectsetup'
                    className='collapse'
                    aria-labelledby='headingTwo'
                    data-parent='#accordion'
                  >
                    <div className='card-body'>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor.
                    </div>
                  </div>
                </div>
              </Slide>

              <Slide left delay={300}>
                <div className='special-card my-2'>
                  <div className='card-header' id='headingTwo'>
                    <h5 className='mb-0'>
                      <button
                        className='btn btn-link collapsed text-dark'
                        data-toggle='collapse'
                        data-target='#projectExecution'
                        aria-expanded='false'
                        aria-controls='projectExecution'
                      >
                        Project Execution
                      </button>

                      <b> </b>
                    </h5>
                  </div>
                  <div
                    id='projectExecution'
                    className='collapse'
                    aria-labelledby='headingTwo'
                    data-parent='#accordion'
                  >
                    <div className='card-body'>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor.
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
          <div className='col-lg-1 col-md-1'></div>
          <div className='col-lg-6 col-md-6 my-auto ml-auto'>
            <img
              id='approach-image'
              src={middleBackgroundImage}
              alt='side-back'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
