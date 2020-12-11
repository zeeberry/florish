import styled from 'styled-components';

export const Button = styled.button`
  background: #ef600e;
  color: white;
  padding: 1em 2em;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 1em 1.2em;
  width: 24em;
  border: 1px solid;
  margin-right: 15px;

  &:focus {
    outline-color: #3B815E;
    outline-offset: 1px;
    outline-style: double;
  }
`;

export const Label = styled.label`
  font-size: 14px;
`;

export const Header1 = styled.h1`
  font-size: 48px;
`;

export const Header2 = styled.h2`
  font-size: 32px;
  font-weight: 500;
`;

