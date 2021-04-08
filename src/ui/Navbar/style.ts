import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.695rem 1.25rem;
`;

export const MenuControl = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    position: absolute;
    right: 10px;
  }
`;

export const CloseIconContainer = styled.div`
  padding: 2rem;
`;
