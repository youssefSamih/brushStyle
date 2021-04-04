import React from 'react';
import Link from 'next/link';
import Logo from 'ui/Logo';
import { NavbarContainer } from './style';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Link href="/">
        <Logo />
      </Link>
    </NavbarContainer>
  );
};

export default Navbar;
