import { Section } from 'interfaces';
import React from 'react';
import { Item } from 'react-flex-ready';
import Button from 'ui/Button';

export const ButtonWidget: React.FC<Section> = ({ children, column, type }) => {
  return (
    <Item col={column}>
      <Button type={type}>{children}</Button>
    </Item>
  );
};
