import React from 'react';
import { ButtonProps } from 'ui/interfaces';

import { StyledButton } from './style';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, as, type, onClick, inactive, disabled }, ref) => (
    <StyledButton
      as={as}
      disabled={inactive || disabled}
      inactive={inactive}
      type={type}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </StyledButton>
  )
);

export default Button;
