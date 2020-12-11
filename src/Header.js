import React from 'react';
import logo from './images/logo.svg';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  border-bottom: 1px solid #EEFBF5;
  padding: 15px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const Navigation = styled.nav`
 max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
 height: 34px;
  width: 34px;
  margin-right: 5px;
`;


function Header() {
  return (
    <HeaderWrapper>
      <Navigation>
        <Section>
          <Logo src={logo} alt='logo' />
          Florish
        </Section>
        <Section>
          <div>About Us</div>
        </Section>
      </Navigation>
    </HeaderWrapper>
  );
}

export default Header;
