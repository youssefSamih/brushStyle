import Link from 'next/link';
import React from 'react';
import { HeaderProps, ListStyleProps } from 'ui/interfaces';
import { ItemList, ItemListText, ListStyle } from './style';

const NavbarLinks = ({
  links,
  forSidebarLinks,
}: HeaderProps & ListStyleProps) => {
  return (
    <ListStyle {...{ forSidebarLinks }}>
      {links?.map((link) => (
        <ItemList key={link.id} {...{ forSidebarLinks }}>
          <Link href={link.href}>
            <ItemListText {...{ forSidebarLinks }}>{link.name}</ItemListText>
          </Link>
        </ItemList>
      ))}
    </ListStyle>
  );
};

export default NavbarLinks;
