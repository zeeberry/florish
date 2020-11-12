import React from 'react';
//import './Callout.css';
import './Shared.css';

function Callout() {
  return (
    <div className='Callout-section-left'>
      <h1 className='Callout-title'>Grow your potential</h1>
      <p className='Callout-paragraph'>Own the interview process—and get the job that’s right for you.</p>
      <section className='Callout-email-section'>
        <h3 className='Callout-email-section-title'>Get Early Access</h3>
        <label className='Callout-email-section-label'>Enter Email Address</label>
        <div>
          <input type='email' placeholder='Email Address'/>
          <button className='Button-input-primary'>Submit</button>
        </div>
      </section>
    </div>
  );
}

export default Callout;
