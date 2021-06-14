import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const Quote = () => {
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.elements[0].value;
    const email = e.target.elements[1].value;
    const country = e.target.elements[2].value;
    const interest = e.target.elements[3].value;
    const specificTechnology = e.target.elements[4].value;
    const projectionDescription = e.target.elements[5].value;

    const response = await axios.post(
      'https://neezerchain-backend.herokuapp.com/api/quote',
      {
        // const response = await axios.post('http://localhost:3002/api/quote', {
        interest: interest,
        country: country,
        specificTechnology: specificTechnology,
        name: name,
        email: email,
        projectionDescription: projectionDescription,
      }
    );

    setMessage(response.data.message);
    // console.log(interest);
    // console.log(response);
  };

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
              UR PROJECT
            </h4>
            <div className='col-lg-12 col-md-12 my-5'>
              <p className='text-center'>
                Fill the form and tell us about your project. Our team will
                evaluate the project and contact you with an estimation of our
                fee.
              </p>
              <form onSubmit={onSubmit}>
                <div className=' row mt-4'>
                  <div className='col-lg-12 col-md-12'>
                    <label for='basic-url'>Name</label>
                    <div className=' form-group'>
                      <input
                        type='text'
                        className='form-control'
                        id='basic-url'
                        aria-describedby='basic-addon3'
                        required
                      />
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <label for='basic-url'>Email</label>
                    <div className=' form-group'>
                      <input
                        type='email'
                        className='form-control'
                        id='basic-url'
                        aria-describedby='basic-addon3'
                        required
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
                        required
                      />
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <label for='basic-url'>I am interested in</label>
                    <div className='form-group'>
                      <select
                        class='custom-select'
                        name='interest'
                        id='interest'
                        required
                      >
                        <option disabled>Please select</option>
                        <option value='Website Design and Corporate Systems'>
                          Website Design and Corporate Systems
                        </option>
                        <option value='Software Development'>
                          Software Development
                        </option>
                        <option value='Custom iOS and Android Apps Development'>
                          Custom iOS and Android Apps Development
                        </option>
                        <option value='Native and Cross-platform Solutions'>
                          Native and Cross-platform Solutions
                        </option>
                        <option value='UI/UX Design'>UI/UX Design</option>
                        <option value='Digital Branding & Marketing'>
                          Digital Branding & Marketing
                        </option>
                        <option value='Product Ideation & Validation'>
                          Product Ideation & Validation
                        </option>
                        <option value='Technology Maintenance and Suppport'>
                          Technology Maintenance and Suppport
                        </option>
                        <option value='Consulting Services'>
                          Consulting Services
                        </option>
                        <option value='Mobile App Development'>
                          Mobile App Development
                        </option>
                        <option value='Enterprise Solution'>
                          Enterprise Solution
                        </option>
                        <option value='Other'>Other</option>
                      </select>
                      {/* <input
                        type='text'
                        className='form-control'
                        id='basic-url'
                        aria-describedby='basic-addon3'
                        required
                      /> */}
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <label for='basic-url'>
                      Are there any specific technology you are interested in?
                    </label>
                    <div className='form-group'>
                      <select
                        class='custom-select'
                        name='interest'
                        id='interest'
                        required
                      >
                        <option disabled>Please select</option>
                        <option value='iOS'>iOS</option>
                        <option value='Android'>Android</option>
                        <option value='Kotlin'>Kotlin</option>
                        <option value='React Native'>React Native</option>
                        <option value='Flutter'>Flutter</option>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='Vue'>Vue</option>
                        <option value='Ruby'>Ruby</option>
                        <option value='Node'>Node</option>
                        <option value='Java'>Java</option>
                        <option value='PHP'>PHP</option>
                        <option value='Python'>Python</option>
                        <option value='Machine Learning'>
                          Machine Learning
                        </option>
                        <option value='Salesforce Development'>
                          Salesforce Development
                        </option>
                        <option value='Quality Assurrance'>
                          Quality Assurrance
                        </option>
                        <option value='DevOps'>DevOps</option>
                        <option value='Others'>Others</option>
                      </select>
                      {/* <input
                        type='text'
                        className='form-control'
                        id='basic-url'
                        aria-describedby='basic-addon3'
                        required
                      /> */}
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
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <b>Need an NDA first?</b>
                <br />
                <b>Email us at info@neezerchain.com</b>
                <div className='col-lg-12 col-md-12'>
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
                </div>
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
