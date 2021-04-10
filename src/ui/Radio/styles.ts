import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

interface RdoContainerProps {
  state?: string;
  selected?: boolean;
  DoNotshowShadow?: boolean;
  centerVertically: boolean;
  noBorderSelected?: boolean;
}

export const StyledReactMarkdown = styled(ReactMarkdown)`
  width: 100%;
  p {
    margin: 0;
    line-height: 1.5;
  }
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const RdoContainer = styled.div<RdoContainerProps>`
  cursor: pointer;
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 0.7rem;
  width: 100%;
  padding: 1.3rem 1.2rem;
  margin-bottom: 1.25rem;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.grey[700]};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid transparent;
  ${({ centerVertically }) =>
    centerVertically ? 'align-items: center;' : null}
  ${({ DoNotshowShadow }) =>
    DoNotshowShadow ? null : 'box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);'}

  ${({ theme, state, selected, noBorderSelected }) => {
    if (state && theme.colors.stateColors[state]) {
      return `border: 1px solid ${theme.colors.stateColors[state].main};`;
    }
    if (!noBorderSelected) {
      if (selected) return `border: 1px solid ${theme.colors.primary.main};`;
    }
  }}

	div {
    line-height: 1.5;
    font-size: 1em;
  }

  &:hover {
    ${({ DoNotshowShadow }) =>
      DoNotshowShadow ? null : 'box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);'}
  }
  &:active {
    ${({ DoNotshowShadow }) =>
      DoNotshowShadow ? null : 'box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);'}
  }

  li {
    margin-bottom: 1rem;
    &::before {
      content: '- ';
    }
  }

  ul {
    padding: 0;
    list-style: none;
    & li {
      display: flex;
      align-items: baseline;
    }
  }
`;
