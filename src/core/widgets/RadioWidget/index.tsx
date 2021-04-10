import { Section } from 'interfaces';
import React from 'react';
import { Item } from 'react-flex-ready';
import Radio from 'ui/Radio';

export const RadioWidget = ({ label, column = 12 }: Section) => {
  return (
    <Item col={column}>
      <Radio {...{ label }} />
    </Item>
  );
};
