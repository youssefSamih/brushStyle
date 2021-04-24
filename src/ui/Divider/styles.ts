import styled from 'styled-components';

export interface HrProps {
  margin?: number | string;
  mobileHidden?: boolean;
}

export const StyledDivider = styled.hr<HrProps>`
  margin: ${({ margin }) => (margin ? margin + 'rem' : '0.5rem 0')};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.grey[200]};
  border-width: 1px 0px 0px 0px;

  ${({ mobileHidden, theme }) =>
    mobileHidden &&
    `
		@media (max-width: ${theme.breakpoints.md}) {
			display: none;
		}
	`}
`;
