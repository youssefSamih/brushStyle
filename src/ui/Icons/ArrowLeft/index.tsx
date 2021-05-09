import { MouseEvent } from 'react';

import { Svg } from './styles';

interface ArrowLefttProps {
  className?: string;
  style?: Record<string, unknown>;
  onClick?: (e: MouseEvent) => void;
  color?: string;
  borderColor?: string;
  opacity?: number;
  height?: string | number;
  width?: string | number;
  shadow?: boolean;
  strokeWidth?: string;
}

export const ArrowLeft = ({
  className,
  style,
  onClick,
  color = '#333333',
  borderColor,
  opacity,
  height = '2rem',
  width = '2rem',
  shadow = false,
  strokeWidth = '1',
}: ArrowLefttProps) => (
  <Svg
    className={className}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    width={width}
    height={height}
    style={{ ...style }}
    bgOpacity={opacity}
    shadow={shadow}
    borderColor={borderColor}
  >
    <path
      fill={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M6.13 11l6.33-6.33 1.41 1.41L8.96 11l4.91 4.92-1.41 1.41L6.13 11z"
    />
  </Svg>
);
