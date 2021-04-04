import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.695rem 1.25rem;
`;

export const ListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  width: 100%;
  align-items: center;
  margin-left: 20rem;
  justify-content: flex-end;
`;

export const ItemList = styled.li`
  margin-left: 3rem;
`;
export const ItemListText = styled.a`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
