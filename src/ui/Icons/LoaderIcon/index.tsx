import { ElementType } from 'react';

import { Svg } from './style';

interface LoaderIconProps {
  toColor?: string;
  fromColor?: string;
  height?: string;
  width?: string;
  as?: ElementType;
}

export const LoaderIcon = ({
  height = '26',
  width = '26',
  toColor = '#FFF',
  fromColor = '#FFFFFF00',
  as,
}: LoaderIconProps) => (
  <Svg
    as={as}
    width={width}
    height={height}
    viewBox={`0 0 ${height} ${width}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient x1="50%" y1="6.173%" x2="14.594%" y2="70.089%" id="a">
        <stop stopColor={fromColor} offset="0%" />
        <stop stopColor={toColor} offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        d="M13 26C5.82 26 0 20.18 0 13S5.82 0 13 0v3C7.477 3 3 7.477 3 13s4.477 10 10 10 10-4.477 10-10h3c0 7.18-5.82 13-13 13z"
        fill="url(#a)"
        fillRule="nonzero"
      />
      <path
        d="M26 13c0 7.18-5.82 13-13 13v-3c5.523 0 10-4.477 10-10h3z"
        fill="#FFF"
        fillRule="nonzero"
      />
      <path
        d="M23 13h3v-.5a1.5 1.5 0 00-1.5-1.5c-.828 0-1.5 1-1.5 1.5v.5z"
        fill="#FFF"
      />
    </g>
  </Svg>
);
