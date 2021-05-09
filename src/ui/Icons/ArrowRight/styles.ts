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
  background-color: rgba(
    255,
    255,
    255,
    ${({ bgOpacity }) => bgOpacity ?? 0.85}
  );
  ${({ borderColor }) =>
    borderColor ? `border: solid 1px ${borderColor};` : ''}
  ${({ shadow }) =>
    shadow
      ? `
        box-shadow: 0 0 0.375rem 0 rgba(0, 0, 0, 0.15),
        0 5px 10px 0 rgba(0, 0, 0, 0.15);`
      : ''}

	&:hover {
    background-color: rgba(
      255,
      255,
      255,
      ${({ bgOpacity }) => bgOpacity ?? 0.85}
    );
    ${({ shadow }) =>
      shadow
        ? `
        box-shadow: 0 0 0.375rem 0 rgba(0, 0, 0, 0.3);`
        : ''}
  }
`;
