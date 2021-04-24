import styled from 'styled-components';
import { InputSProps } from 'ui/interfaces';

export const InputStyle = styled.input<InputSProps>`
  font-size: ${({ size }) => (size ? `${size}pt` : '1em')};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  color: ${({ theme, color }) => color || theme.colors.grey[700]};
  text-align: ${({ align }) => align || 'left'};
  padding: 1.25rem 0.93rem;
  border-radius: 2px;
  width: 100%;
  outline: none;

  ${({
    theme: {
      colors: { stateColors, grey, white },
    },
    border,
    bg,
    error,
  }) =>
    border
      ? `
				background-color: ${white};
				border: 1px solid ${error ? stateColors['danger'].darker : grey[800]};`
      : `
				background-color: ${bg || grey[100]};
				border: 1px solid transparent;
		`}
  ${({ bg, theme }) =>
    bg && `background-color: ${bg || theme.colors.grey[100]}`}

	${({ theme, state }) =>
    state &&
    theme.colors.stateColors[state] &&
    `
			border-bottom: 2px solid ${theme.colors.stateColors[state].main};
		`};

  &:focus {
    ${({ theme, state }) =>
      !(state && theme.colors.stateColors[state]) &&
      `
			border: 1px solid ${theme.colors.primary.main};
		`};
  }

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.grey[700]};
    opacity: 0.5;
  }

  &::-moz-placeholder {
    color: ${({ theme }) => theme.colors.grey[700]};
    opacity: 0.5;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey[700]};
    opacity: 0.5;
  }
`;

export const InputContainer = styled.div<InputSProps>`
  margin-bottom: 1rem;
  position: relative;
  p {
    color: ${({ theme, error }) =>
      error ? theme.colors.stateColors.danger.main : theme.colors.grey[700]};
    font-size: 0.87em;
    max-width: 100%;
    position: absolute;
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.lg}) and (min-width: ${({ theme }) =>
        theme.breakpoints.md}) {
      bottom: -4rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 0.75em;
    }
  }
`;

export const ErrorLabel = styled.p`
  width: 100%;
  text-align: right;
`;

export const Icon = styled.svg`
  position: absolute;
  right: 0.75rem;
  bottom: 26%;
`;

export const Label = styled.label<InputSProps>`
  display: block;
  margin: 0 0 0.5rem 0;
  line-height: 1.33;
  font-size: 0.93em;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  ${({ state, theme }) =>
    state === 'danger' &&
    `
		color:  ${theme.colors.stateColors['danger'].darker};
	`}

  ${({ border, theme }) =>
    !border &&
    `
		color: ${theme.colors.grey[700]};
    `}
    
    ${({ isRequired, theme }) => {
    if (isRequired)
      return `::after {
        content: ' *';
        color: ${theme.colors.stateColors['danger'].darker};
    }`;
  }};
  ${({ color }) => color && `color: ${color};`}
`;
