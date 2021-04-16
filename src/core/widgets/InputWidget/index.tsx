import { getWidgetValue } from 'core/components/utils/getWidgetValue';
import { useWidgetWatch } from 'core/components/utils/hooks/useWidgetWatch';
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
  $if,
}: Section) => {
  const { value } = useWidgetWatch({ $if, control: useFormMthods?.control });
  if (value) {
    return <></>;
  }
  return (
    <Item col={column}>
      <Input
        {...{
          name,
          placeholder,
          type,
          required,
          register: name ? useFormMthods?.register(name, { required }) : {},
          unregister: useFormMthods?.unregister,
        }}
      />
    </Item>
  );
};
