import { ElementType, MouseEvent } from 'react';

import { Svg } from './style';

interface MenuCloseProps {
  onClick?: (e: MouseEvent) => void;
  color?: string;
  height?: string;
  width?: string;
  as?: ElementType;
}

export const MenuClose = ({
  onClick,
  height = '1.5625rem',
  width = '1.5625rem',
  color = '#999999',
  as,
}: MenuCloseProps) => (
  <Svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    width={width}
    height={height}
    as={as}
  >
    <path
      fill={color}
      d="M3.22 17.36L9.59 11 3.22 4.64l1.42-1.42L11 9.59l6.36-6.37 1.42 1.42L12.41 11l6.37 6.36-1.42 1.42L11 12.41l-6.36 6.37-1.42-1.42z"
    />
  </Svg>
);
