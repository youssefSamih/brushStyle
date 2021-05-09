import { MouseEvent } from 'react';

import { Svg } from './styles';

export interface ArrowRightProps {
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
  testId?: string;
}

export const ArrowRight = ({
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
  testId,
}: ArrowRightProps) => (
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
    data-testid={testId}
  >
    <path
      fill={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M15.88 11l-6.31 6.34-1.42-1.42 4.9-4.92-4.93-4.92 1.41-1.42L15.88 11z"
    />
  </Svg>
);
