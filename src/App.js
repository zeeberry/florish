import React from 'react';
import logo from './logo.svg';
import Hero from './Hero';
import Features from './Features';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <main className='App-main'>
        <Hero />
        <Features />
      </main>
      <footer className='App-footer'>© 2020 Florish</footer>
    </div>
  );
}

export default App;
