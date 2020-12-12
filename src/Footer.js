import React from 'react';
import styled from 'styled-components';
import theme from './Theme';

const FooterWrapper = styled.footer`
  border-top: 1px solid #c7eedf;
  padding: 15px;
  display: flex;
  justify-content: center;
  color: #999999;
  font-size: 14px;
`;

const Heart = styled.span`
  background-color: ${theme.red};
  display: inline-block;
  height: 10px;
  margin: 0 10px;
  position: relative;
  top: 4px;
  transform: rotate(-45deg);
  width: 10px;

  &:before,
  &:after {
    content: "";
    background-color: ${theme.red};
    border-radius: 50%;
    height: 10px;
    position: absolute;
    width: 10px;
  }

  &:before {
    top: -5px;
    left: 0;
  }

  &:after{
    left: 5px;
    top: 0;
  }

`;


function Footer() {
  return (
    <FooterWrapper>
      © 2020 Florish. Built with <Heart></Heart> in NYC.
    </FooterWrapper>
  );
}

export default Footer;
