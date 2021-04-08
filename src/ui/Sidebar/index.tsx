import { ElementType, FC } from 'react';

import { SidebarDim, SideBarWrapper } from './style';

interface NavSideBarProps {
  active: boolean;
  side: 'left' | 'right';
  onClickClose: () => void;
  as?: ElementType;
}

const SideBar: FC<NavSideBarProps> = ({
  active,
  side = 'left',
  children,
  onClickClose,
  as,
}) => {
  const handleClose = () => {
    onClickClose && onClickClose();
  };

  return (
    <>
      <SidebarDim active={active} onClick={handleClose} />
      <SideBarWrapper active={active} side={side} as={as}>
        {children}
      </SideBarWrapper>
    </>
  );
};

export default SideBar;
