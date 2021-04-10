import React from 'react';
import { Control, FormState } from 'react-hook-form';
import { useTheme } from 'styled-components';
import { InputStyle } from './style';

interface InputProps {
  id?: string;
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  state?: string;
  errorString?: string | null;
  border?: boolean;
  bg?: string;
  color?: string;
  autocomplete?: string;
  maxLength?: number;
  align?: string;
  size?: number;
  value?: string | number | string[];
  noMargin?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  as?: React.ElementType;
  colorLabel?: string;
  control?: Control<Record<string, any>>;
  formState?: FormState<Record<string, any>>;
  setValue?: (
    name: string,
    value: any,
    config?:
      | Partial<{
          shouldValidate: boolean;
          shouldDirty: boolean;
        }>
      | undefined
  ) => void;
  // handleErrorConditionsFormat?: ErrorCondition;
  canHideInputValue?: boolean;
}

const Input = ({
  name,
  type,
  placeholder,
  state,
  required,
  border,
  align,
  size,
  label,
  autocomplete,
  errorString,
  color,
  maxLength,
  onChange,
  bg,
}: InputProps) => {
  const theme = useTheme();
  return (
    <InputStyle
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      state={state}
      required={required}
      border={border}
      // ref={ref}
      align={align}
      size={size}
      aria-label={label}
      autoComplete={autocomplete}
      bg={bg === 'grey' ? theme.colors.grey[100] : undefined}
      error={!!errorString}
      color={color}
      maxLength={maxLength}
      onChange={onChange}
      data-testid="input-id"
    />
  );
};

export default Input;
