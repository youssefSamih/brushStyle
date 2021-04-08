import React from 'react';
import Link from 'next/link';
import Logo from 'ui/Logo';
import { NavbarContainer, MenuControl, CloseIconContainer } from './style';
import { Container } from 'ui/styles';
import { HeaderProps } from 'ui/interfaces';
import { Close, MenuClose, MenuIcon } from 'ui/Icons';
import NavbarLinks from 'ui/NavbarLinks';
import SideBar from 'ui/Sidebar';

const Navbar = ({ links }: HeaderProps) => {
  const [showSideBar, setShowSideBar] = React.useState<boolean>(false);
  const toggle = () => setShowSideBar(!showSideBar);
  return (
    <NavbarContainer as={Container}>
      <Link href="/">
        <Logo />
      </Link>
      <NavbarLinks {...{ links }} />
      <MenuControl>
        {showSideBar ? (
          <MenuClose onClick={toggle} />
        ) : (
          <MenuIcon onClick={toggle} />
        )}
      </MenuControl>
      <SideBar active={showSideBar} side="right" onClickClose={toggle}>
        <CloseIconContainer>
          <Close inactive onClick={toggle} />
        </CloseIconContainer>
        <NavbarLinks {...{ links }} forSidebarLinks={true} />
      </SideBar>
    </NavbarContainer>
  );
};

export default Navbar;
