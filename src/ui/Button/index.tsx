import React from 'react';
import { ButtonProps } from 'ui/interfaces';
import Loader from 'ui/Loader';

import { StyledButton } from './style';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, as, type, onClick, inactive, disabled, loading }, ref) => (
    <StyledButton
      as={as}
      disabled={inactive || disabled}
      inactive={inactive}
      type={type}
      onClick={onClick}
      ref={ref}
    >
      {loading ? <Loader /> : children}
    </StyledButton>
  )
);

export default Button;
