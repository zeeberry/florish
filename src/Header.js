import React from 'react';
import theme from './Theme';
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
  align-items: center;
  color: ${theme.green.base};
  display: flex;
  font-family: 'Monoton', cursive;
  font-size: 1.6em;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Navigation>
        <Section>
          Florish
        </Section>
      </Navigation>
    </HeaderWrapper>
  );
}

export default Header;
