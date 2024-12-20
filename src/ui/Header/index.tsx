import React from 'react';
import { Wrapper } from './style';
import { HeaderProps } from 'ui/interfaces';
import Navbar from 'ui/Navbar';

const Header = ({ variant, links }: HeaderProps) => {
  return (
    <Wrapper variant={variant}>
      <Navbar links={links} />
    </Wrapper>
  );
};

export default Header;
