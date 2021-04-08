import styled from 'styled-components';

interface SvgProps {
  height: string;
  width: string;
}

export const Svg = styled.svg<SvgProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  cursor: pointer;
`;
