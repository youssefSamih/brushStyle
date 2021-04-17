import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4rem 4rem;
  background-color: ${({ theme }) => theme.colors.grey[700]};
  position: relative;
  bottom: 0;

  p {
    margin-top: unset;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.white};

    &:last-child {
      margin-bottom: unset;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 960px) {
    margin-top: 2rem;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    display: block;
    margin-bottom: 0.5rem;
    font-size: 12pt;
  }
`;

export const SubItem = styled.div`
  margin-right: 3rem;

  &:last-child {
    margin-right: unset;
  }
`;

export const Address = styled.div`
  margin: 1.25rem 0;

  p {
    line-height: 0.4rem;
  }
`;
