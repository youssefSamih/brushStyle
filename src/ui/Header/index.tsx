import React from 'react';
import { Wrapper } from './style';
import { HeaderProps } from 'ui/interfaces';
import Navbar from 'ui/Navbar';

const Header = ({ variant }: HeaderProps) => {
  return (
    <Wrapper variant={variant}>
      <Navbar />
    </Wrapper>
  );
};

export default Header;
