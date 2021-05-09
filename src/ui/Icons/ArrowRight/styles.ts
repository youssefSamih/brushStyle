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
  right: 1rem;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;
