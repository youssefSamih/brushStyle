import React from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { Section } from 'interfaces';
import { ErrorPhoneLabel, PhoneInputContainer } from './style';
import { Controller, DeepMap, FieldValues } from 'react-hook-form';

interface TelInputProps {
  errorString?: string;
}

const TelInput = ({
  useFormMthods,
  name,
  required,
  schema,
  errorString,
}: Section & TelInputProps) => {
  const [state, onChange] = React.useState('');
  if (useFormMthods?.control && name) {
    let validPhoneNumber: boolean;
    const validatePhoneNumber = (
      inputNumber: string,
      country: any,
      dirtyField: DeepMap<FieldValues, true>,
      phoneLength: number
    ) => {
      if (dirtyField?.[name.split('.')?.[0]]?.[name.split('.')?.[1]]) {
        if (
          (inputNumber &&
            inputNumber?.replace(country.dialCode, '')?.trim() === '') ||
          inputNumber === '' ||
          inputNumber.length < phoneLength
        ) {
          validPhoneNumber = false;
          return false;
        }
        validPhoneNumber = true;
        return true;
      }
      validPhoneNumber = false;
      return true;
    };
    return (
      <PhoneInputContainer error={!!errorString}>
        <Controller
          name={name}
          control={useFormMthods?.control}
          render={(props) => {
            return (
              <PhoneInput
                onChange={(e) => {
                  useFormMthods.trigger();
                  props.field.onChange(e);
                }}
                inputProps={{
                  id: name,
                  name,
                  required,
                  autoComplete: 'none',
                  'data-testid': 'input-id',
                }}
                country={'fr'}
                value={props.field.value}
                isValid={(inputNumber, country: any, countries) => {
                  const phoneLength = Math.ceil(
                    (countries.filter(
                      (val: any) => val.dialCode === country.dialCode
                    )[0] as any)?.format.length / 2
                  );
                  return validatePhoneNumber(
                    inputNumber,
                    country,
                    props.formState.dirtyFields,
                    phoneLength
                  );
                }}
                specialLabel=""
              />
            );
          }}
          rules={{
            required,
            validate: () => validPhoneNumber || schema?.errorMessage?.validate,
          }}
        />
        {errorString && (
          <ErrorPhoneLabel data-testid="phone-input-error">
            {errorString}
          </ErrorPhoneLabel>
        )}
      </PhoneInputContainer>
    );
  }
  return (
    <PhoneInputContainer>
      <PhoneInput onChange={onChange} value={state} />
    </PhoneInputContainer>
  );
};

export default TelInput;
