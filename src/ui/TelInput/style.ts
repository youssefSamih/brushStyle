import styled from 'styled-components';
import { InputSProps } from 'ui/interfaces';

export const PhoneInputContainer = styled.div<InputSProps>`
  .PhoneInput {
    text-align: ${({ align }) => align || 'left'};
    margin-bottom: 1rem;
    border-radius: 2px;
    width: 100%;
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
    .PhoneInputCountry {
      padding-left: 1rem;
    }
    input {
      outline: none;
      border: none;
      padding: 1.25rem 0.93rem;
      font-size: ${({ size }) => (size ? `${size}pt` : '1em')};
      font-weight: ${({ theme }) => theme.fonts.weight.light};
      color: ${({ theme, color }) => color || theme.colors.grey[700]};
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
    }
  }
`;
