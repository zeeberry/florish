import React from 'react';
import './Features.css';
import featureImage1 from './images/feature1.png';
import featureImage2 from './images/feature2.png';
import featureImage3 from './images/feature3.png';

function Features() {
  return (
    <>
      <div className='feature feature-1'>
        <div className='feature-content'>
          <figure>
            <img className='feature-image' src={featureImage1} alt=""/>
          </figure>
          <p className='feature-title'>Personalized guidance</p>
          <p className='feature-description'>Understand what to expect in the interview process—and how to ask the right questions.</p>
        </div>
      </div>
      <div className='feature feature-2'>
        <div className='feature-content'>
          <figure>
            <img className='feature-image' src={featureImage2} alt=""/>
          </figure>
          <p className='feature-title'>One-on-one mentorship</p>
          <p className='feature-description'>Learn how to approach your interviews with confidence.</p>
        </div>
      </div>
      <div className='feature feature-3'>
        <div className='feature-content'>
          <figure>
            <img className='feature-image' src={featureImage3} alt=""/>
          </figure>
          <p className='feature-title'>Structured reflection</p>
          <p className='feature-description'>Decide if the company, role, or offer is right for you.</p>
        </div>
      </div>
    </>
  );
}

export default Features;
