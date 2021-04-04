import styled from 'styled-components';
import { getVariantBgColor } from 'theme/helpers';

interface WrapperProps {
  variant?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.secondary};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  z-index: 20;

  ${getVariantBgColor()}
`;
