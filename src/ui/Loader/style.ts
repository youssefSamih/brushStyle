import styled from 'styled-components';

export const SvgAnimation = styled.svg`
  animation: rotation 0.7s linear infinite;
  @keyframes rotation {
    100% {
      transform: rotate(-360deg);
    }
  }
`;
