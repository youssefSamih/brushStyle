import { handleErrorMessage } from 'core/utils/ErrorFormatting';
import { Section } from 'interfaces';
import React from 'react';
import { Item } from 'react-flex-ready';
import TelInput from 'ui/TelInput';

export const PhoneWidget = ({
  useFormMthods,
  column,
  name,
  ...rest
}: Section) => {
  return (
    <Item col={column}>
      <TelInput
        {...{
          useFormMthods,
          name,
          errorString: name
            ? handleErrorMessage(
                useFormMthods?.formState.errors,
                name,
                useFormMthods?.formState.isDirty
              )
            : {},

          ...rest,
        }}
      />
    </Item>
  );
};
