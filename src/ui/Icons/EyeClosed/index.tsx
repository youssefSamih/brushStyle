import { ElementType, MouseEvent } from 'react';

import { Svg } from './styles';

interface EyeClosedProps {
  style?: Record<string, unknown>;
  onClick?: (e: MouseEvent) => void;
  height?: string;
  width?: string;
  color?: string;
  as?: ElementType;
}

export const EyeClosed = ({
  style,
  onClick,
  height = '0.625rem',
  width = '1.5rem',
  color = '#21B4EF',
  as,
}: EyeClosedProps) => (
  <Svg
    width={width}
    height={height}
    onClick={onClick}
    style={{ ...style }}
    as={as}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24.49 9.95"
  >
    <path
      fill={color}
      d="M24.49 4.16l-2.8-2.52c.2-.29.41-.58.59-.89L21 0a10.22 10.22 0 01-8.81 5.1A10.24 10.24 0 013.35 0l-1.3.75a11 11 0 00.66 1L0 4.16l1 1.12 2.66-2.4a11.76 11.76 0 002.88 2.24L5.13 8.28l1.37.61 1.39-3.12a11.59 11.59 0 003.61.78V10H13V6.54a11.74 11.74 0 003.58-.82L18 8.89l1.37-.61-1.44-3.22a11.69 11.69 0 002.81-2.25l2.75 2.47z"
    />
  </Svg>
);
