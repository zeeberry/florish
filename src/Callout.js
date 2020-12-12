import React from 'react';
import styled from 'styled-components';
import EmailForm from './EmailForm';
import theme from './Theme';
import { WideSection } from './Shared';

const Section = styled(WideSection)`
  background: ${theme.green.lightest};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 0 9em;
`;

const Title = styled.h3`
  font-size: ${theme.h3};
  font-weight: 600;
  margin-bottom: 0;
`;

const Paragraph = styled.p`
  font-size: ${theme.p};
`;

function Callout() {
  return (
    <Section>
      <Title>Grow your potential</Title>
      <Paragraph>Own the interview process—and get the job that’s right for you.</Paragraph>
      <EmailForm />
    </Section>
  );
}

export default Callout;
