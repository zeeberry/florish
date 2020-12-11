import React from 'react';
import heroImage from './images/hero.png';
import styled from 'styled-components';
import EmailForm from './EmailForm';

const Section = styled.section`
  margin-top: 2.5rem;
  margin-bottom: 5rem;
`;

const Title = styled.h1`
  font-size: 42px;
  margin-top: 0;
`;

const Paragraph = styled.p`
  font-size: 18px;
  margin-top: 0;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
 width: auto;
  max-height: 600px;
`;

function Hero() {
  return (
    <Section>
      <Left>
        <Title>Grow your potential</Title>
        <Paragraph>
          Own the interview process—and get the job that’s right for you.
        </Paragraph>
        <EmailForm />
      </Left>
      <Right>
        <Image src={heroImage} alt="laptop and plants"/>
      </Right>
    </Section>
  );
}

export default Hero;
