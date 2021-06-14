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
                  {/* <div className='card-header' id='headingTwo'> */}
                  {/* <h5 className='mb-0'> */}
                  <button
                    className='btn collapsed text-dark'
                    data-toggle='collapse'
                    data-target='#research'
                    aria-expanded='false'
                    aria-controls='research'
                    style={{
                      width: '350px',
                      padding: '1.2rem 2rem',
                      textAlign: 'left',
                      background: '#fff',
                      borderRadius: '30px',
                      border: 'none',
                    }}
                  >
                    <b>
                      Research and Development{' '}
                      <span style={{ float: 'right' }}>{'>'}</span>
                    </b>
                    {/* </h5> */}
                  </button>
                  <div
                    id='research'
                    className='collapse'
                    aria-labelledby='headingTwo'
                    data-parent='#accordion'
                  >
                    <div className='card-body'>
                      We select an expert team to help our clients develop new
                      business models or improve existing ones, thus outlining
                      feasible ways to deliver your expectations.
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide left delay={100}>
                <div className='special-card my-2'>
                  <button
                    className='btn collapsed text-dark'
                    data-toggle='collapse'
                    data-target='#projectEvaluation'
                    aria-expanded='false'
                    aria-controls='projectEvaluation'
                    style={{
                      width: '350px',
                      padding: '1.2rem 2rem',
                      textAlign: 'left',
                      background: '#fff',
                      borderRadius: '30px',
                      border: 'none',
                    }}
                  >
                    {/* <div className='card-header' id='headingTwo'> */}
                    <b>
                      Project Evaluation{' '}
                      <span style={{ float: 'right' }}>{'>'}</span>
                    </b>
                    {/* </div> */}
                  </button>
                  <div
                    id='projectEvaluation'
                    className='collapse'
                    aria-labelledby='headingTwo'
                    data-parent='#accordion'
                  >
                    <div className='card-body'>
                      We align effective processes and resources to shape your
                      business idea.
                    </div>
                  </div>
                </div>
              </Slide>

              <Slide left delay={200}>
                <div className='special-card my-2'>
                  <button
                    className='btn collapsed text-dark'
                    data-toggle='collapse'
                    data-target='#projectsetup'
                    aria-expanded='false'
                    aria-controls='projectsetup'
                    style={{
                      width: '350px',
                      padding: '1.2rem 2rem',
                      textAlign: 'left',
                      background: '#fff',
                      borderRadius: '30px',
                      border: 'none',
                    }}
                  >
                    <b>
                      Project Setup{' '}
                      <span style={{ float: 'right' }}>{'>'}</span>
                    </b>
                    {/* </h5> */}
                  </button>
                  <div
                    id='projectsetup'
                    className='collapse'
                    aria-labelledby='headingTwo'
                    data-parent='#accordion'
                  >
                    <div className='card-body'>
                      We ensure that the right tools are allocated to the
                      successful implementation of your project.
                    </div>
                  </div>
                </div>
              </Slide>

              <Slide left delay={300}>
                <div className='special-card my-2'>
                  <button
                    className='btn collapsed text-dark'
                    data-toggle='collapse'
                    data-target='#projectExecution'
                    aria-expanded='false'
                    aria-controls='projectExecution'
                    style={{
                      width: '350px',
                      padding: '1.2rem 2rem',
                      textAlign: 'left',
                      background: '#fff',
                      borderRadius: '30px',
                      border: 'none',
                    }}
                  >
                    <b>
                      Project Execution{' '}
                      <span style={{ float: 'right' }}>{'>'}</span>
                    </b>
                  </button>

                  <div
                    id='projectExecution'
                    className='collapse'
                    aria-labelledby='headingTwo'
                    data-parent='#accordion'
                  >
                    <div className='card-body'>
                      We work with you to ensure that your expectations are met.
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
