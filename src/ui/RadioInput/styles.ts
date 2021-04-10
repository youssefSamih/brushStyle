import styled from 'styled-components';

export const Input = styled.input`
  font-size: 1em;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  border: solid 1px ${({ theme }) => theme.colors.grey[800]};
  outline: none;
  cursor: pointer;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.grey[100]};

  &:checked {
    background: radial-gradient(
      ${({ theme }) => theme.colors.grey[700]} 35%,
      ${({ theme }) => theme.colors.grey[100]} 40%
    );
  }
`;
