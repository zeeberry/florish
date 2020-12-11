import React from 'react';
import { Label, Input, Button } from './Shared';

function EmailForm() {
  return (
    <section>
      <Label>Enter Email Address</Label>
      <div>
        <Input type='email' placeholder='Email Address'/>
        <Button>Submit</Button>
      </div>
    </section>
  );
}

export default EmailForm;
