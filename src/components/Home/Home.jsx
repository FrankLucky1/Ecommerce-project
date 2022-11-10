import React from 'react'


import './Home.scss'

import {images} from '../../assets/index'

const Home = () => {
  return (
    <div className='hero-section'>
        <div className='hero-message'>
          <div className='switch'></div>
          <div className='message-container'>
              <h1 className='large-text'>
                Make your life different.<br/>
                Your life <span className='line'></span> a ride.
              </h1>

              <h6 className='small-text'>
                Whether you're driving, cycling, or taking public transit, a headsets makes it easy every step of the way.
              </h6>
              <button>Buy <span>$99.89</span></button>
          </div>
        </div>
        <div className='hero-img'>
          <img src={images.Hero} alt="headset" />
        </div>

    </div>
  )
}

export default Home;