import styled from 'styled-components';

interface DividerContainerProps {
  margTop?: string;
  margBottom?: string;
}

export const DividerContainer = styled.div<DividerContainerProps>`
  margin-bottom: ${({ margBottom }) => (margBottom ? margBottom : 0)};
  margin-top: ${({ margTop }) => (margTop ? margTop : 0)};
`;
