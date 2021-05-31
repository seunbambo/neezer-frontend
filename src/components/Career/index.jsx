import React from 'react';
import './styles.css';

const Career = () => {
  return (
    <section className='section-colored' id='career'>
      <div className='container'>
        <div className='row col-lg-12 col-md-12 mx-auto'>
          <div className='col-lg-12 col-md-12 text-center'>
            <h4 className='text-center'>
              <span
                style={{
                  borderBottom: '0.2rem solid #636363',
                  fontWeight: '900',
                }}
              >
                CA
                <span
                  style={{
                    borderBottom: '0.4rem solid #fc7404',
                    borderRadius: '6px',
                  }}
                >
                  REE
                </span>
                RS
              </span>
            </h4>
          </div>
          <div className='col-lg-12 col-md-12 text-center'>
            <p>Join us to create solutions beyond Africa.</p>
            <p>
              We welcome applications from hardworking self-motivated designers,
              developers, product/project managers ready to build the future.
            </p>
          </div>
          <div className='col-lg-12 col-md-12 text-center'>
            <h4 className='text-center'>
              <span
                style={{
                  borderBottom: '0.2rem solid #636363',
                  fontWeight: '900',
                }}
              >
                CV
                <span
                  style={{
                    borderBottom: '0.4rem solid #fc7404',
                    borderRadius: '6px',
                  }}
                >
                  {' '}
                  VAU
                </span>
                LT
              </span>
            </h4>
          </div>
          <div className=''>
            <form action='#'>
              <div className='mx-auto row mt-4'>
                <div className='col-lg-6 col-md-6'>
                  <label for='basic-url'>Full Name</label>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      id='basic-url'
                      aria-describedby='basic-addon3'
                    />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <label for='basic-url'>Email Address</label>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      id='basic-url'
                      aria-describedby='basic-addon3'
                    />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <label for='basic-url'>Desired Role</label>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      id='basic-url'
                      aria-describedby='basic-addon3'
                    />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <label for='basic-url'>Attach Document</label>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      id='basic-url'
                      aria-describedby='basic-addon3'
                    />
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <label for='basic-url'>Why do you want to join us?</label>
                  <div className='form-group'>
                    <textarea
                      type='textarea'
                      className='form-control'
                      id='basic-url'
                      rows='7'
                      aria-describedby='basic-addon3'
                    ></textarea>
                  </div>
                </div>
                <div className='col-lg-2 col-md-2 mx-auto'>
                  <div className='form-group'>
                    <input
                      type='submit'
                      className='form-control btn quote'
                      id='basic-url'
                      aria-describedby='basic-addon3'
                      value='Submit'
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
