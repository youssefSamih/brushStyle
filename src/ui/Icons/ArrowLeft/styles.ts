import styled from 'styled-components';

interface SvgProps {
  bgOpacity?: number;
  borderColor?: string;
  shadow?: boolean;
  height: string | number;
  width: string | number;
}

export const Svg = styled.svg<SvgProps>`
  visibility: hidden;
  border-radius: 100%;
  padding: 0.3rem;
  left: 1rem;
  z-index: 1;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;
