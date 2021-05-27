import React from 'react';
import './styles.css';

const Blog = () => {
  return (
    <section className='section-eight' id='blog'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 text-center'>
            <div className='col-lg-3 col-md-3 mx-auto'>
              <div className='form-group'>
                <input
                  type='submit'
                  className='form-control btn quote py-2 text-center'
                  id='basic-url'
                  aria-describedby='basic-addon3'
                  value='Visit our blog'
                  style={{ height: '55px' }}
                />
              </div>
            </div>
          </div>
          <div className='col-lg-12 col-md-12 text-center mt-5'>
            <h4 className='text-center'>
              SUBSCRIBE
              <span
                style={{
                  borderBottom: '0.2rem solid #636363',
                  fontWeight: '900',
                }}
              >
                {' '}
                TO
                <span
                  style={{
                    borderBottom: '0.4rem solid #fc7404',
                    borderRadius: '6px',
                  }}
                >
                  {' '}
                  OUR
                </span>{' '}
                NE
              </span>
              WSLETTER
            </h4>
          </div>
          <div className='col-lg-5 col-md-5 mx-auto'>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                id='basic-url'
                aria-describedby='basic-addon3'
                placeholder='Enter your email address here'
              />
            </div>
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
    </section>
  );
};

export default Blog;
