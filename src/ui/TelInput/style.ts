import styled from 'styled-components';
import { InputSProps } from 'ui/interfaces';

export const PhoneInputContainer = styled.div<InputSProps>`
  .react-tel-input {
    margin-bottom: 1rem;
    input {
      font-size: ${({ size }) => (size ? `${size}pt` : '1em')};
      font-weight: ${({ theme }) => theme.fonts.weight.light};
      color: ${({ theme, color }) => color || theme.colors.grey[700]};
      text-align: ${({ align }) => align || 'left'};
      padding: 1.8rem 4rem;
      width: 100%;
      outline: none;
      background-color: ${({ theme, color }) =>
        color || theme.colors.grey[100]};
      ${({ bg, theme }) =>
        bg && `background-color: ${bg || theme.colors.grey[100]}`}
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
