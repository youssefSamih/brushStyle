import { handleErrorConditionsFormat } from 'core/utils/ErrorFormatting';
import { useWidgetWatch } from 'core/utils/hooks/useWidgetWatch';
import { Section } from 'interfaces';
import React from 'react';
import { Item } from 'react-flex-ready';
import { useWatch } from 'react-hook-form';
import Input from 'ui/Input';

export const InputWidget = ({
  column,
  placeholder,
  name,
  type,
  required,
  useFormMthods,
  $if,
  schema,
}: Section) => {
  const { value } = useWidgetWatch({ $if, control: useFormMthods?.control });
  const inputValueChange =
    name &&
    useFormMthods?.control &&
    useWatch({ control: useFormMthods?.control, name });
  React.useEffect(() => {
    if (inputValueChange && name) {
      useFormMthods?.setValue(name, inputValueChange);
    }
  }, [inputValueChange]);
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
          register: name
            ? useFormMthods?.register(name, {
                required,
                ...handleErrorConditionsFormat(schema, useFormMthods?.watch),
              })
            : {},
          unregister: useFormMthods?.unregister,
        }}
      />
    </Item>
  );
};