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

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


function App() {
  return (
    <AppWrapper>
      <Header />
      <Main>
        <Hero />
        <Description />
        <FeatureList />
        <Callout />
      </Main>
      <Footer />
  </AppWrapper>
  );
}

export default App;
