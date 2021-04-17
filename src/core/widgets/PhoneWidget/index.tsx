import { Section } from 'interfaces';
import React from 'react';
import { Item } from 'react-flex-ready';
import TelInput from 'ui/TelInput';

export const PhoneWidget = ({ useFormMthods, column, ...rest }: Section) => {
  return (
    <Item col={column}>
      <TelInput
        {...{
          useFormMthods,
          ...rest,
        }}
      />
    </Item>
  );
};
