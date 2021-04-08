import { ElementType, MouseEvent } from 'react';

import { Svg } from './styles';

interface CloseProps {
  style?: Record<string, unknown>;
  onClick?: (e: MouseEvent) => void;
  color?: string;
  height?: string;
  width?: string;
  strokeWidth?: string;
  inactive?: boolean;
  as?: ElementType;
  state?: string;
}

export const Close = ({
  onClick,
  height = '1.25rem',
  width = '1.25rem',
  strokeWidth = '1',
  inactive = false,
  as,
  state,
  color,
}: CloseProps) => (
  <Svg
    inactive={inactive}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    width={width}
    height={height}
    as={as}
    state={state}
    color={color}
  >
    <path
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M3.22 17.36L9.59 11 3.22 4.64l1.42-1.42L11 9.59l6.36-6.37 1.42 1.42L12.41 11l6.37 6.36-1.42 1.42L11 12.41l-6.36 6.37-1.42-1.42z"
    />
  </Svg>
);
