import React from 'react';
import styled from 'styled-components';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <DesktopHeader>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <MobileAction>
            <button>
              <User size={24} />
            </button>
          </MobileAction>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
      <DesktopAction>
        <Button>subscribe</Button>
        <DesktopLink>Already a subscriber?</DesktopLink>
        </DesktopAction>
    </DesktopHeader>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${props => props.theme.QUERIES.laptopAndUp} {
    background-color: transparent;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;
  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;

    @media ${props => props.theme.QUERIES.laptopAndUp} {
      color: black;
    }
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${props => props.theme.QUERIES.tabletAndUp} {
    margin-block: 48px 74px;
  }

  
  @media ${props => props.theme.QUERIES.laptopAndUp} {
    margin-block: 0px;
  }
`;

const MobileAction = styled(ActionGroup)`

  @media ${props => props.theme.QUERIES.laptopAndUp} {
    display: none;
  }
`

const DesktopAction = styled(ActionGroup)`
  display: none;

  @media ${props => props.theme.QUERIES.laptopAndUp} {  
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`

const DesktopLink = styled.a`
  font-size: 0.875rem;
  font-style: italic;
  color: var(--color-gray-900);
`
const DesktopHeader = styled.header`
  @media ${props => props.theme.QUERIES.laptopAndUp} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 16px auto 72px;
    padding-block: 24px;
  }
`


export default Header;
