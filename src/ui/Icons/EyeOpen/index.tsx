import { ElementType, MouseEvent } from 'react';

import { Svg } from './styles';

interface EyeOpenProps {
  style?: Record<string, unknown>;
  onClick?: (e: MouseEvent) => void;
  height?: string;
  width?: string;
  color?: string;
  as?: ElementType;
}

export const EyeOpen = ({
  style,
  onClick,
  height = '.95rem',
  width = '1.5rem',
  color = '#21B4EF',
  as,
}: EyeOpenProps) => (
  <Svg
    width={width}
    height={height}
    onClick={onClick}
    style={{ ...style }}
    as={as}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20.66 12.44"
  >
    <path
      fill={color}
      d="M20.45 5.84a11.68 11.68 0 00-20.23 0L0 6.22l.22.38a11.73 11.73 0 0010.11 5.84A11.75 11.75 0 0020.45 6.6l.21-.38zm-10.12 5.1a10.21 10.21 0 01-8.58-4.72 10.17 10.17 0 0117.17 0 10.24 10.24 0 01-8.59 4.72z"
    />
    <path
      fill={color}
      d="M10.33 2.57A3.65 3.65 0 1014 6.22a3.66 3.66 0 00-3.67-3.65z"
    />
  </Svg>
);
