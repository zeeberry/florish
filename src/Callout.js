import React from 'react';
import styled from 'styled-components';
import EmailForm from './EmailForm';
import theme from './Theme';

const Section = styled.section`
  background: ${theme.green.lightest};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 0;
`;


function Callout() {
  return (
    <Section>
      <h2>Grow your potential</h2>
      <p>Own the interview process—and get the job that’s right for you.</p>
      <EmailForm />
    </Section>
  );
}

export default Callout;
