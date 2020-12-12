import styled from 'styled-components';
import theme from './Theme';

export const Button = styled.button`
  background: ${theme.orange.base};
  color: white;
  cursor: pointer;
  padding: 1em 2em;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 600;
  
  &:focus {
    outline: none;
  }

  &:hover {
    background: ${theme.orange.light}
  }
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
  display: block;
  font-size: 0.9em;
  margin-bottom: 0.3em;
`;

export const Header1 = styled.h1`
  font-size: 48px;
`;

export const Header2 = styled.h2`
  font-size: 32px;
  font-weight: 500;
`;

export const BaseSection = styled.section`
  max-width: 1280px;
  width: 100%;
`;

export const WideSection = styled.section`
  width: 100%;
`;
