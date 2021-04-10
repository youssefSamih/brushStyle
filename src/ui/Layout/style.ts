import styled from 'styled-components';

export const LayoutContainer = styled.div`
  min-height: 100%;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 10rem 0 0;
    display: block;
    margin: 0 auto;
  }
`;
