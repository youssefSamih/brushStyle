import React from 'react';
import {
  Control,
  FieldValues,
  FormState,
  UseFormUnregister,
} from 'react-hook-form';
import { useTheme } from 'styled-components';
import { EyeClosed, EyeOpen } from 'ui/Icons';
import { ErrorLabel, Icon, InputContainer, InputStyle, Label } from './style';

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
  unregister?: UseFormUnregister<FieldValues>;
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
  canHideInputValue = false,
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
  bg,
  register,
  unregister,
}: InputProps) => {
  const theme = useTheme();
  const [hideInputValue, setHideInputValue] = React.useState<boolean>(true);
  React.useEffect(() => {
    return () => {
      name && unregister?.(name);
    };
  }, []);
  return (
    <InputContainer state={state} error={!!errorString}>
      {label && (
        <Label
          state={state}
          isRequired={required}
          border={border}
          data-testid="input-label"
        >
          {label}
        </Label>
      )}
      <InputStyle
        id={name}
        name={name}
        type={
          canHideInputValue && hideInputValue
            ? 'password'
            : canHideInputValue && !hideInputValue
            ? 'text'
            : type
        }
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
        data-testid="input-id"
        {...register}
      />
      {errorString && (
        <ErrorLabel data-testid="input-error">{errorString}</ErrorLabel>
      )}
      {canHideInputValue && !hideInputValue && (
        <EyeClosed as={Icon} onClick={() => setHideInputValue(true)} />
      )}
      {canHideInputValue && hideInputValue && (
        <EyeOpen as={Icon} onClick={() => setHideInputValue(false)} />
      )}
    </InputContainer>
  );
};

export default Input;
