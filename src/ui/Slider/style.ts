import styled from 'styled-components';

export const SlickContainer = styled.div`
  margin-bottom: 11.13rem;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 1.375rem;
  }
  svg {
    position: absolute;
    height: 100%;
    top: 0;
  }
  li {
    margin: 0 0.5rem;
    width: 91px;
    height: 55px;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin: 0 0.1875rem;
      width: 0.5rem;
      height: 0.5rem;

      button {
        &::before {
          color: ${({ theme }) => theme.colors.grey[200]};
          opacity: 1;
          font-size: 0.5em;
        }
      }
    }
    &.slick-active {
      a img {
        opacity: 1;
      }
      button {
        &::before {
          color: ${({ theme }) => theme.colors.grey[400]};
          opacity: 1;
        }
      }
    }
  }

  .slick-slider {
    &:hover {
      svg {
        visibility: visible;
      }
    }
  }

  .slick-thumb {
    position: absolute;
    display: flex !important;
    justify-content: center;
    list-style: none;
    padding: 0.75rem 0 1.5rem 0;
    background-color: #1f1f25;
    width: 100%;
    margin-top: -0.2rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      background-color: ${({ theme }) => theme.colors.white};
      padding: 0rem;
      bottom: -24px;
      height: 28px;
    }

    img {
      opacity: 0.5;
      width: 91px;
      height: 55px;
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        display: none;
      }
    }
  }
`;
