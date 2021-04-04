import React from 'react';
import Header from 'ui/Header';
import { HeaderProps } from 'ui/interfaces';

const Layout: React.FC<HeaderProps> = ({ children, variant, links }) => {
  return (
    <>
      <Header variant={variant} links={links} />
      <div>{children}</div>
    </>
  );
};

export default Layout;
