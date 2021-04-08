import styled from 'styled-components';

interface SvgProps {
  height: string;
  width: string;
  inactive?: boolean;
  state?: string;
}

export const Svg = styled.svg<SvgProps>`
  border-radius: 2px;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  cursor: pointer;

  ${({
    theme: {
      colors: { grey, stateColors },
    },
    state,
    inactive,
  }) => {
    {
      if (inactive) {
        return `
				path {
								fill: ${grey[200]};
				}`;
      }
      if (state && stateColors[state]) {
        return `
				path {
						fill: ${stateColors[state].main};
					}
					&:hover {
						background-color: ${stateColors[state].lighter};
						path {
							fill: ${stateColors[state].light};
						}
					}

					&:active {
						background-color: ${stateColors[state].lighter};
						path {
							fill: ${stateColors[state].dark};
						}
				}`;
      }

      return `
				path {
					fill: ${stateColors['danger'].main};
				}
				&:hover {
					background-color: ${stateColors['danger'].lighter};
					path {
						fill: ${stateColors['danger'].light};
					}
				}
				&:active {
					background-color: ${stateColors['danger'].lighter};
					path {
						fill: ${stateColors['danger'].dark};
					}
				}`;
    }
  }}
`;
