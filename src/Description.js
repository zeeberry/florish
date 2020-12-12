import React from 'react';
import styled from 'styled-components';
import theme from './Theme';
import { WideSection } from './Shared';

const Section = styled(WideSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  margin: 3rem 0;
  background: #EEFBF5;
`;

const Title = styled.h2`
  margin-bottom: 0;
  font-weight: 600;
  font-size: ${theme.h3};
`;

const Paragraph = styled.p`
  margin-bottom: 25px;
  font-size: ${theme.p};
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
