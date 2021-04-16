import { Section } from 'interfaces';
import React from 'react';
import { Item } from 'react-flex-ready';
import Button from 'ui/Button';

export const ButtonWidget: React.FC<Section> = ({
  children,
  column,
  type,
  disabled,
  useFormMthods,
}) => {
  return (
    <Item col={column}>
      <Button
        type={type}
        disabled={disabled && !useFormMthods?.formState.isValid}
        inactive={disabled && !useFormMthods?.formState.isValid}
      >
        {children}
      </Button>
    </Item>
  );
};
