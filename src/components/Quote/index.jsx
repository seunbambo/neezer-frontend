import React from 'react';

const Quote = () => {
  return (
    <section className='section-five' id='quote'>
      <div className='container'>
        <div className='row col-lg-12 col-md-12 mx-auto'>
          <div className=' mt-4 mb-5'>
            <h4 className='text-center'>
              GET A FREE QU
              <span
                style={{
                  borderBottom: '0.2rem solid #636363',
                  fontWeight: '900',
                }}
              >
                OT
                <span
                  style={{
                    borderBottom: '0.4rem solid #fc7404',
                    borderRadius: '6px',
                  }}
                >
                  E FOR{' '}
                </span>
                YO
              </span>
              UR BUSINESS
            </h4>
            <div className='col-lg-12 col-md-12 my-5'>
              <p className='text-center'>
                Fill the form and tell us about your project. Our team will
                evaluate the project and contact you with an estimation of our
                fee.
              </p>
              <form action='#'>
                <div className=' row mt-4'>
                  <div className='col-lg-6 col-md-6'>
                    <label for='basic-url'>I am interested in</label>
                    <div className=' form-group'>
                      <input
                        type='text'
                        className='form-control'
                        id='basic-url'
                        aria-describedby='basic-addon3'
                      />
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <label for='basic-url'>Country</label>
                    <div className=' form-group'>
                      <input
                        type='text'
                        className='form-control'
                        id='basic-url'
                        aria-describedby='basic-addon3'
                      />
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-12'>
                    <label for='basic-url'>
                      Are there any specific technology you are interested in?
                    </label>
                    <div className=' form-group'>
                      <input
                        type='text'
                        className='form-control'
                        id='basic-url'
                        aria-describedby='basic-addon3'
                      />
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <label for='basic-url'>Name</label>
                    <div className=' form-group'>
                      <input
                        type='text'
                        className='form-control'
                        id='basic-url'
                        aria-describedby='basic-addon3'
                      />
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <label for='basic-url'>Email</label>
                    <div className=' form-group'>
                      <input
                        type='text'
                        className='form-control'
                        id='basic-url'
                        aria-describedby='basic-addon3'
                      />
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-12'>
                    <label for='basic-url'>Project Description</label>
                    <div className='input-group form-group'>
                      <textarea
                        type='textarea'
                        className='form-control'
                        id='basic-url'
                        rows='7'
                        aria-describedby='basic-addon3'
                      ></textarea>
                    </div>
                  </div>
                </div>
                <b>Need an NDA first?</b>
                <br />
                <b>Email us at info@neezerchain.com</b>
                <div className='col-lg-2 col-md-2 mx-auto my-4'>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
