import { Section } from 'interfaces';
import React from 'react';
import { Item } from 'react-flex-ready';
import Input from 'ui/Input';

export const InputWidget = ({ column, placeholder, name }: Section) => {
  return (
    <Item col={column}>
      <Input {...{ name, placeholder }} />
    </Item>
  );
};
