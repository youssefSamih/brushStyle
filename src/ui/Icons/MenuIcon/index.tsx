import { ElementType, MouseEvent } from 'react';

import { Svg } from './style';

interface MenuIconProps {
  onClick?: (e: MouseEvent) => void;
  height?: string | number;
  width?: string | number;
  color?: string;
  as?: ElementType;
}

export const MenuIcon = ({
  onClick,
  height = '1.5625rem',
  width = '1.5625rem',
  color = '#999999',
  as,
}: MenuIconProps) => (
  <Svg
    width={width}
    height={height}
    onClick={onClick}
    as={as}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
  >
    <path fill={color} d="M1 6.5h30v3H1zM1 14.5h30v3H1zM1 22.5h30v3H1z" />
  </Svg>
);
