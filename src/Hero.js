import React from 'react';
import heroImage from './images/hero.png';
import styled from 'styled-components';
import { BaseSection } from './Shared';
import EmailForm from './EmailForm';
import theme from './Theme';

const Section = styled(BaseSection)`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  margin-bottom: 5rem;
  @media only screen and (max-width: ${theme.tablet.minWidth}) {
    flex-direction: column-reverse;
  }
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
  @media only screen and (max-width: ${theme.tablet.minWidth}) {
    width: 100%;
  }
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
