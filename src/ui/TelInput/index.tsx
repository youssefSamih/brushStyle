import React from 'react';
import 'react-phone-number-input/style.css';
import PhoneInputWithCountry from 'react-phone-number-input';
import { Section } from 'interfaces';
import { PhoneInputContainer } from './style';
import { Controller } from 'react-hook-form';

const TelInput = ({ useFormMthods, name }: Section) => {
  const [state, onChange] = React.useState('');
  if (useFormMthods?.control && name) {
    return (
      <PhoneInputContainer>
        <Controller
          name={name}
          control={useFormMthods?.control}
          render={(props) => {
            return (
              <PhoneInputWithCountry
                onChange={props.field.onChange}
                value={props.field.value}
              />
            );
          }}
          rules={{}}
        />
      </PhoneInputContainer>
    );
  }
  return (
    <PhoneInputContainer>
      <PhoneInputWithCountry onChange={onChange} value={state} />
    </PhoneInputContainer>
  );
};

export default TelInput;
