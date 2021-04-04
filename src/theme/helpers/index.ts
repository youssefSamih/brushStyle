interface ThemeProps {
  theme: {
    colors: {
      white: string;
      black: { [key: string]: string };
      grey: { [key: string]: string };
    };
  };
  variant?: string;
}

export const getVariantBgColor = () => ({ theme, variant }: ThemeProps) => {
  switch (variant) {
    case 'secondary':
      return `
				background-color: ${theme.colors.grey[900]};
		`;
    default:
      return `
				background-color: ${theme.colors.white};
		`;
  }
};
