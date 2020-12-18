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
  box-sizing: border-box;
  @media only screen and (max-width: ${theme.tablet.width}) {
    padding: 7rem 1.5rem 9em;
  }
`;

const Title = styled.h3`
  font-size: ${theme.h3};
  font-weight: 600;
  margin-bottom: 0;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: ${theme.p};
`;

const Content = styled.div`
  max-width: 600px;
`;

function Callout() {
  return (
    <Section>
      <Content>
        <Title>Grow your potential</Title>
        <Paragraph>Own the interview process—and get the job that’s right for you.</Paragraph>
        <EmailForm />
      </Content>
    </Section>
  );
}

export default Callout;
