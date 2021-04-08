import React from 'react';
import Link from 'next/link';
import Logo from 'ui/Logo';
import {
  ItemListText,
  ListStyle,
  NavbarContainer,
  ItemList,
  MenuControl,
} from './style';
import { Container } from 'ui/styles';
import { HeaderProps } from 'ui/interfaces';
import { MenuClose, MenuIcon } from 'ui/Icons';

const Navbar = ({ links }: HeaderProps) => {
  const [showSideBar, setShowSideBar] = React.useState<boolean>(false);
  const toggle = () => setShowSideBar(!showSideBar);
  return (
    <NavbarContainer as={Container}>
      <Link href="/">
        <Logo />
      </Link>
      <ListStyle>
        {links.map((link) => (
          <ItemList key={link.id}>
            <Link href={link.href}>
              <ItemListText>{link.name}</ItemListText>
            </Link>
          </ItemList>
        ))}
      </ListStyle>
      <MenuControl>
        {showSideBar ? (
          <MenuClose onClick={toggle} />
        ) : (
          <MenuIcon onClick={toggle} />
        )}
      </MenuControl>
    </NavbarContainer>
  );
};

export default Navbar;
