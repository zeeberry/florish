import React, { useState } from 'react';
import styled from 'styled-components';
import theme from './Theme';
import { BaseLabel, BaseInput, BaseButton } from './Shared';

const Form = styled.form`
  margin: 1em 0;
`;

const Input = styled(BaseInput)`
  border-color: ${props => props.dark ? theme.white : 'inherit'};
`;

const Message = styled.div`
  background: ${theme.green.lighter};
  color: ${theme.green.darkest};
  font-size: ${theme.small};
  font-weight: 600;
  padding: 0.5em 1em;
  margin-top: 0.8em;
`;

const Label = styled(BaseLabel)`
  color: ${props => props.dark ? theme.white : 'inherit'};
`;

const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  padding: 0;

  @media only screen and (max-width: ${theme.desktop.minWidth}) {
    flex-direction: column;
  }
`;

const InputGroup = styled.div`
  flex: 1;
  margin-right: 15px;
  @media only screen and (max-width: ${theme.desktop.minWidth}) {
    margin-right: 0;
  }
`;

const Button = styled(BaseButton)`
  align-self: baseline;
  @media only screen and (max-width: ${theme.desktop.minWidth}) {
    margin: 1em 0 0;
    padding: 1.3em;
  }
`;

function EmailForm({name, dark}) {
  
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  };
  
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSuccess = () => {
    setMessage('Success! You are now on the waitlist.');

    setTimeout(() => {
      setMessage('');
    }, 5000);

    setEmail('');
  };

  const handleSubmit = (e) => {
    if (email) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': name, 'email': email })
      })
        .then(handleSuccess);
    }

    e.preventDefault();
  };

  return (
    <Form name={name} onSubmit={handleSubmit}>
      <Label htmlFor='emailInput' dark={dark}>Enter Email Address</Label>
      <Fieldset>
        <InputGroup>
          <Input type='email'
                 name='email' 
                 id='emailInput' 
                 value={email} 
                 placeholder='Email Address' 
                 onChange={handleChange}
                 dark={dark} />
          {message && <Message aria-live='polite' role='status'>{message}</Message>}
        </InputGroup>
        <Button type='submit'>Join Waitlist</Button>
      </Fieldset>
    </Form>
  );
}

export default EmailForm;
