import React from 'react';
import Header from 'ui/Header';
import { HeaderProps } from 'ui/interfaces';
import { LayoutContainer } from './style';

const Layout: React.FC<HeaderProps> = ({ children, variant, links }) => {
  return (
    <>
      <Header variant={variant} links={links} />
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
};

export default Layout;
