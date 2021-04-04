import React from 'react';
import Header from 'ui/Header';
import { HeaderProps } from 'ui/interfaces';

const Layout: React.FC<HeaderProps> = ({ children, variant }) => {
  return (
    <>
      <Header variant={variant} />
      <div>{children}</div>
    </>
  );
};

export default Layout;
