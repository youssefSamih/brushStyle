import styled from 'styled-components';

interface Props {
  state: string;
}

interface IconProps {
  state: string;
  onClick?: (e: MouseEvent) => void;
}

interface MessageProps {
  state: string;
}

export const Wrapper = styled.div<Props>`
  display: flex;
  text-align: center;
  display: block;
  margin: 0.5rem 0;
  width: 100%;
  border-radius: 3px;
  position: relative;
  padding: 0.5rem 2rem 0.5rem 2rem;

  ${({
    theme: {
      colors: { stateColors },
    },
    state,
  }) =>
    state && stateColors[state]
      ? `background-color: ${stateColors[state].lighter};
              border: solid 0.5px ${stateColors[state].main};
              color: ${stateColors[state].dark}`
      : `background-color: ${stateColors['danger'].lighter};
              border: solid 0.5px ${stateColors['danger'].main};
`}
`;

export const Message = styled.div<MessageProps>`
  font-size: 0.93em;

  p {
    margin: 0rem 0.1rem;
    line-height: 1.53;
    font-family: ${({ theme }) => theme.fonts.temporary};
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
    display: inline-block;
  }

  a,
  span {
    cursor: pointer;
    margin: 0 0.1rem;
    line-height: 1.53;
    font-family: ${({ theme }) => theme.fonts.temporary};
    text-decoration: underline;
    ${({
      theme: {
        colors: { stateColors },
      },
      state,
    }) =>
      state && stateColors[state]
        ? `color: ${stateColors[state]};`
        : `color: ${stateColors['danger']};`}
  }
`;

export const Icon = styled.svg<IconProps>`
  position: absolute;
  right: 0.81rem;
  top: 50%;
  transform: translate(0, -50%);
`;
