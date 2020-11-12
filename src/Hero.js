import React from 'react';
import heroImage from './images/hero.png';
import './Hero.css';
import './Shared.css';

function Hero() {
  return (
    <>
      <div className='Hero-section-left'>
        <h1 className='Hero-title'>Grow your potential</h1>
        <p className='Hero-paragraph'>Own the interview process—and get the job that’s right for you.</p>
        <section className='Hero-email-section'>
          <h3 className='Hero-email-section-title'>Get Early Access</h3>
          <label className='Hero-email-section-label'>Enter Email Address</label>
          <div>
            <input type='email' placeholder='Email Address'/>
            <button className='Button-input-primary'>Submit</button>
          </div>
        </section>
      </div>
      <div className='Hero-section-right'>
        <img className='Hero-image' src={heroImage} alt="laptop and plants"/>
      </div>
    </>
  );
}

export default Hero;
