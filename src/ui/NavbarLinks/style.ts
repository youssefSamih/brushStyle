import styled from 'styled-components';
import { ListStyleProps } from 'ui/interfaces';

export const ItemListText = styled.a<ListStyleProps>`
  cursor: pointer;
  font-family: 'Lato-Regular';
  color: ${({ theme }) => theme.colors.white};
  ${({ forSidebarLinks }) =>
    forSidebarLinks
      ? `
		font-weight: bold;
		line-height: 2;
    font-size: 1.5em;
	`
      : ''}
`;

export const ListStyle = styled.ul<ListStyleProps>`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  ${({ forSidebarLinks }) =>
    forSidebarLinks
      ? ''
      : `
		margin-left: 20rem;
		display: flex
  	align-items: center;
  	justify-content: flex-end;
	`};
`;

export const ItemList = styled.li<ListStyleProps>`
  ${({ forSidebarLinks }) =>
    forSidebarLinks ? 'text-align: center;' : 'margin-left: 3rem;'}
`;
