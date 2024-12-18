import React from 'react';
import styled from 'styled-components';

import { WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);



  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileNav>
          <UnstyledButton><Icon id={'shopping-bag'}/></UnstyledButton>
          <UnstyledButton><Icon id={"search"}/></UnstyledButton>
          <UnstyledButton><Icon id={"menu"}/></UnstyledButton>
        </MobileNav>
        <Side />
      </MainHeader>

      <MobileMenu
        open= {() => setShowMobileMenu(true)}
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-y: hidden;
  overflow-x: auto;

  @media ${props => props.theme.QUERIES.tabletAndSmaller} {
    border-top: 4px solid var(--color-gray-900);
    justify-content: space-between;
}
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(10px, 4dvw - 1rem, 48px);
  margin: 0px 48px;


  @media ${props => props.theme.QUERIES.tabletAndSmaller} {
    display: none;
  }
  `;

const MobileNav = styled.nav`
  display: none;

  @media ${props => props.theme.QUERIES.tabletAndSmaller} {
    display: flex;
    gap: 24px;
    margin-left: auto;
  }
  `

const Side = styled.div`
  flex: 1;

  @media ${props => props.theme.QUERIES.tabletAndSmaller} {
    visibility: hidden;
    flex: 0 0 0;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--secondary-color);
  }
`;

export default Header;
