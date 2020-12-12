import React from 'react';
import styled from 'styled-components';
import { Label, Input, Button } from './Shared';

const Section = styled.section`
  margin: 1em 0;
`;

function EmailForm() {
  return (
    <Section>
      <Label htmlFor='emailInput'>Enter Email Address</Label>
      <div>
        <Input type='email' id='emailInput' placeholder='Email Address'/>
        <Button>Submit</Button>
      </div>
    </Section>
  );
}

export default EmailForm;
