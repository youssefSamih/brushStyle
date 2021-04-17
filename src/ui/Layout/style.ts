import styled from 'styled-components';
import { LayoutContainerProps } from 'ui/interfaces';

export const LayoutContainer = styled.div`
  min-height: 100%;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
    margin: 0 auto;
  }
`;
