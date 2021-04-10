import styled from 'styled-components';

interface TabProps {
  selected?: boolean;
}

export const TabWrapper = styled.div<TabProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.688rem 0;
  cursor: pointer;
  flex: 1;
  ${({
    selected,
    theme: {
      colors: { grey },
    },
  }) => (selected ? `box-shadow: 0px .5px 5px ${grey[900]};` : ``)}
  p {
    margin: 0;
    line-height: 1.77;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.8125em;
    font-family: ${({ theme }) => theme.fonts.primary};
  }
  svg {
    margin-right: 0.625rem;
  }
  path {
    fill: ${({
      selected,
      theme: {
        colors: { primary, white },
      },
    }) => (selected ? white : primary.main)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0 1.25rem;
    p {
      display: none;
    }
    svg {
      margin: 0 0.625rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0 0.5rem;
  }
`;

export const TabsControlContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

export const TabsControl = styled.div`
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.grey[100]};
  text-align: center;

  h2 {
    margin: 1.75rem auto 0.6rem auto;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.563em;
    font-weight: normal;
    line-height: normal;
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 1em;
    }
  }
`;

export const TabsContent = styled.div`
  width: 100%;
  padding: 10.25rem 0 5.25rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 7rem 0 3.75rem 0;
  }
`;
