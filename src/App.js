import React from 'react';
import logo from './images/logo.svg';
import Hero from './Hero';
import Features from './Features';
import Callout from './Callout';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <nav>
          <div className='nav-left'>
            <img src={logo} className='App-logo' alt='logo' />
            Florish
          </div>
          <div className='nav-right'>
            <div>About Us</div>
          </div>
        </nav>
      </header>
      <div className='App-content'>
        <main className='App-main'>
          <Hero />
          <div className='App-section'>
            <h2 className='App-section-title'>By your side with every interview step</h2>
            <p className='App-section-paragraph'>Florish helps you gain control over the job seeking process by giving you personalized guidance</p>
          </div>
          <Features />
          <Callout />
        </main>
      </div>
      <footer className='App-footer'>© 2020 Florish</footer>
    </div>
  );
}

export default App;
