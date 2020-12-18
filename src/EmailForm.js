import React from 'react';
import styled from 'styled-components';
import { Label, BaseInput, Button } from './Shared';

const Section = styled.section`
  margin: 1em 0;
`;

const Input = styled(BaseInput)`
  margin-right: 15px;
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
