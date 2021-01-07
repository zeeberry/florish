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
  @media only screen and (max-width: ${theme.tablet.width}) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 2.6em;
  font-weight: 900;
  margin-top: 0;
  @media only screen and (max-width: ${theme.tablet.width}) {
    font-size: 2.2em;
    text-align: center;
  }

  @media only screen and (max-width: ${theme.tablet.minWidth}) {
    font-size: 2em;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  margin-top: 0;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 1em;
  @media only screen and (min-width: ${theme.desktop.minWidth}) {
    min-width: 500px;
  }

  @media only screen and (max-width: ${theme.tablet.width}) {
    margin-right: 0;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: auto;
  @media only screen and (max-width: ${theme.tablet.width}) {
    max-height: 400px;
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
        <Paragraph>
          Sign up for our private beta.
        </Paragraph>
        <EmailForm name='heroEmailForm' />
      </Left>
      <Right>
        <Image src={heroImage} alt="laptop and plants"/>
      </Right>
    </Section>
  );
}

export default Hero;
