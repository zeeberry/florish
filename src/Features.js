import React from 'react';
import './Features.css';

function Features() {
  return (
    <>
      <div className='feature-1'>
        <img alt='someimage'/>
        <p>Personalized guidance</p>
        <p>Understand what to expect in the interview process—and how to ask the right questions.</p>
      </div>
      <div className='feature-2'>
        <img alt='someimage'/>
        <p>One-on-one mentorship</p>
        <p>Learn how to approach your interviews with confidence.</p>
      </div>
      <div className='feature-3'>
        <img alt='someimage'/>
        <p>Structured reflection</p>
        <p>Decide if the company, role, or offer is right for you.</p>
      </div>
    </>
  );
}

export default Features;
