import styled from 'styled-components';

interface LinkControlProps {
  letterSpace?: boolean;
}

export const LinkControl = styled.a<LinkControlProps>`
  text-align: right;
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 0.8em;
  font-weight: 700;
  cursor: pointer;
  ${({ letterSpace }) => letterSpace && 'letter-spacing: 0.1rem;'}
`;
