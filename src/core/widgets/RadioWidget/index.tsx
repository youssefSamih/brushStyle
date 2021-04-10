import React from 'react';
import { Item } from 'react-flex-ready';
import Radio from 'ui/Radio';

interface RadioWidgetProps {
  label: string;
  column?: number;
}

export const RadioWidget = ({ label, column = 12 }: RadioWidgetProps) => {
  return (
    <Item col={column}>
      <Radio {...{ label }} />
    </Item>
  );
};
