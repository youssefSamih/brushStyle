import { Section } from 'interfaces';
import React from 'react';
import { Item } from 'react-flex-ready';
import Radio from 'ui/Radio';

export const RadioWidget = ({
  column = 12,
  options,
  name,
  required,
  useFormMthods,
}: Section) => {
  const [state, setState] = React.useState('');
  React.useEffect(() => {
    if (name && state !== '') {
      useFormMthods?.setValue(name, state);
    }
  }, [state]);
  return (
    <>
      {options?.map(({ label, value }) => (
        <Item col={column / 2} key={value}>
          <Radio
            {...{
              label,
              value,
              name,
              register: name
                ? useFormMthods?.register(name, {
                    required,
                  })
                : {},
              onChange: (e) => {
                e && setState(value);
              },
              selected: value === state,
            }}
          />
        </Item>
      ))}
    </>
  );
};
