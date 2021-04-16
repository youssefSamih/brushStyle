import React from 'react';
import {
  Control,
  FieldValues,
  FormState,
  UseFormUnregister,
} from 'react-hook-form';
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
  unregister: UseFormUnregister<FieldValues>;
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
  register?: any;
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
  register,
  unregister,
}: InputProps) => {
  const theme = useTheme();
  React.useEffect(() => {
    return () => unregister(name);
  }, []);
  return (
    <InputStyle
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      state={state}
      required={required}
      border={border}
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
      {...register}
    />
  );
};

export default Input;
