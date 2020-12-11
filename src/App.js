import React from 'react';
import Header from './Header';
import Hero from './Hero';
import FeatureList from './FeatureList';
import Callout from './Callout';
import Description from './Description';
import Footer from './Footer';
import styled from 'styled-components';

const AppWrapper = styled.div`
  box-sizing: border-box;
`;


function App() {
  return (
    <AppWrapper>
      <Header />
      <main>
        <Hero />
        <Description />
        <FeatureList />
        <Callout />
      </main>
      <Footer />
  </AppWrapper>
  );
}

export default App;
