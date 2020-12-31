import React from 'react';
import styled from 'styled-components';
import theme from './Theme';
import { WideSection } from './Shared';

const Section = styled(WideSection)`
  align-items: center;
  background: ${theme.green.base};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
  padding: 5rem;
  text-align: center;

  @media only screen and (max-width: ${theme.tablet.width}) {
    padding: 5rem 1.5rem;
  }
`;

const Title = styled.h2`
  color: ${theme.white};
  font-size: ${theme.h3};
  font-weight: 600;
  margin-bottom: 0;
`;

const Paragraph = styled.p`
  color: ${theme.white};
  font-size: ${theme.p};
  margin-bottom: 25px;
`;


function Description() {
  return (
    <Section>
      <Title>By your side with every interview step</Title>
      <Paragraph>Florish helps you gain control over the job seeking process by giving you personalized guidance</Paragraph>
    </Section>
  );
}

export default Description;
