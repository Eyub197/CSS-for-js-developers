import React from 'react';
import styled from 'styled-components';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import * as Dialog from "@radix-ui/react-dialog";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Dialog.Root onClick={() => open}>
      <Dialog.Close onClick={onDismiss}>Dismiss menu</Dialog.Close>
      <MobileNav>
        <a href="/sale">Sale</a>
        <a href="/new">New&nbsp;Releases</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/kids">Kids</a>
        <a href="/collections">Collections</a>
      </MobileNav>
      <footer>
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </footer>
    </Dialog.Root>
  );
};


const MobileNav = styled.nav`
  position: absolute;
  height: 100dvh;
  width: 30%;
  z-index: 10000;
  background-color: red;
`

export default MobileMenu;
