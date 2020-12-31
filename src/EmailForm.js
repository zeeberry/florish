import React, { useState } from 'react';
import styled from 'styled-components';
import { Label, BaseInput, Button } from './Shared';

const Form = styled.form`
  margin: 1em 0;
`;

const Input = styled(BaseInput)`
  margin-right: 15px;
`;

function EmailForm({name}) {
  
  const [email, setEmail] = useState('');

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  };
  
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e)=> {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', 'email': email })
      })
        .then(() => alert('Success!'))
        .catch(error => alert(error));

      e.preventDefault();
    };

  return (
    <Form name={name} onSubmit={handleSubmit}>
      <Label htmlFor='emailInput'>Enter Email Address</Label>
      <div>
        <Input type='email' name='email' id='emailInput' value={email} placeholder='Email Address' onChange={handleChange}/>
        <Button type='submit'>Submit</Button>
      </div>
    </Form>
  );
}

export default EmailForm;
