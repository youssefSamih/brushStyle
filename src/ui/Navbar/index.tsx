import React from 'react';
import Link from 'next/link';
import Logo from 'ui/Logo';
import { ItemListText, ListStyle, NavbarContainer, ItemList } from './style';
import { Container } from 'ui/styles';
import { HeaderProps } from 'ui/interfaces';

const Navbar = ({ links }: HeaderProps) => {
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
    </NavbarContainer>
  );
};

export default Navbar;
