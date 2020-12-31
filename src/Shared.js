import styled from 'styled-components';
import theme from './Theme';

export const BaseButton = styled.button`
  background: ${theme.orange.base};
  color: white;
  cursor: pointer;
  padding: 1em 2em;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 600;
  @media only screen and (max-width: ${theme.desktop.minWidth}) {
    width: 100%;
  }
  
  &:focus {
    outline: none;
  }

  &:hover {
    background: ${theme.orange.light}
  }
`;

export const BaseInput = styled.input`
  padding: 1em 1.2em;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid;

  &:focus {
    outline-color: #3B815E;
    outline-offset: 1px;
    outline-style: double;
  }
`;

export const BaseLabel = styled.label`
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
  padding: 0 1.5em;
  box-sizing: border-box;
`;

export const WideSection = styled.section`
  width: 100%;
`;
