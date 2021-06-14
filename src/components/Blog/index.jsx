import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const Blog = () => {
  const [message, setMessage] = useState('');

  const mailChimpNewsletterSubscribe = async (e) => {
    e.preventDefault();

    const email = e.target.elements[1].value;

    const response = await axios.post(
      'https://neezerchain-backend.herokuapp.com/api/subscribe',
      {
        // const response = await axios.post('http://localhost:3002/api/subscribe', {
        email: email,
      }
    );

    setMessage(response.data.message);
    console.log(email);
    console.log(response.data.message);
  };

  return (
    <section className='section-eight' id='blog'>
      <div className='container'>
        <form onSubmit={mailChimpNewsletterSubscribe}>
          <div className='row'>
            <div className='col-lg-12 col-md-12 text-center'>
              <div className='col-lg-3 col-md-3 mx-auto'>
                <div className='form-group'>
                  <a href='#' target='_blank'>
                    <input
                      className='form-control btn quote py-2 text-center'
                      id='basic-url'
                      aria-describedby='basic-addon3'
                      value='Visit Our Blog'
                      style={{ height: '55px' }}
                    />
                  </a>
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
            <div className='col-lg-12 col-md-12 mx-auto'>
              {message ? (
                <div
                  className='col-lg-5 col-md-5 alert alert-success alert-dismissible fade show mx-auto'
                  role='alert'
                >
                  {message}
                  <button
                    type='button'
                    class='close'
                    data-dismiss='alert'
                    aria-label='Close'
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
              ) : (
                ''
              )}

              <div className='col-lg-5 col-md-5 mx-auto'>
                <div className='form-group'>
                  <input
                    type='email'
                    name='email'
                    className='form-control'
                    id='basic-url'
                    aria-describedby='basic-addon3'
                    placeholder='Please enter your email address here'
                    required
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
        </form>
      </div>
    </section>
  );
};

export default Blog;
