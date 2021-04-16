import { ElementType, forwardRef, RefObject } from 'react';

import { Input } from './styles';

export type refs =
  | ((instance: HTMLInputElement | null) => void)
  | RefObject<HTMLInputElement>
  | null
  | undefined;

interface RadioProps {
  checked?: boolean;
  name?: string;
  value?: string;
  as?: ElementType;
  onChange?: (e: any) => void;
}

const RadioInput = forwardRef(
  ({ checked, value, name, onChange }: RadioProps, ref: refs) => (
    <Input
      type="radio"
      checked={checked}
      aria-checked={checked}
      readOnly
      ref={ref}
      name={name}
      value={value}
      onChange={onChange}
      data-testid="radio-id"
    />
  )
);

export default RadioInput;
