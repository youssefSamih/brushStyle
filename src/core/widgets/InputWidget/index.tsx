import { Section } from 'interfaces';
import React from 'react';
import { Item } from 'react-flex-ready';
import Input from 'ui/Input';

export const InputWidget = ({
  column,
  placeholder,
  name,
  type,
  required,
  useFormMthods,
}: Section) => {
  return (
    <Item col={column}>
      <Input
        {...{
          name,
          placeholder,
          type,
          required,
          register: name ? useFormMthods?.register(name, { required }) : {},
        }}
      />
    </Item>
  );
};
