import { forwardRef, MouseEvent, RefObject } from 'react';
import RadioInput from 'ui/RadioInput';

import { RdoContainer, StyledReactMarkdown } from './styles';

export type refs =
  | ((instance: HTMLInputElement | null) => void)
  | RefObject<HTMLInputElement>
  | null
  | undefined;

interface RadioProps {
  label?: string;
  selected?: boolean;
  state?: string;
  onClick?: (e: MouseEvent) => void;
  onChange?: (e: string) => void;
  refs?: Record<string, unknown>;
  name?: string;
  value?: string;
  DoNotshowShadow?: boolean;
  centerVertically?: boolean;
  noBorderSelected?: boolean;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label = '',
      state = '',
      selected,
      onClick,
      name = '',
      value,
      DoNotshowShadow,
      centerVertically = false,
      noBorderSelected,
      onChange,
    },
    ref: refs
  ) => {
    const onChangeRadio = (e: MouseEvent<Element, globalThis.MouseEvent>) => {
      onChange && value && onChange(value);
      onClick?.(e);
    };
    return (
      <RdoContainer
        DoNotshowShadow={DoNotshowShadow}
        centerVertically={centerVertically}
        selected={selected}
        state={state}
        onClick={onChangeRadio}
        data-testid="radio-container"
        noBorderSelected={noBorderSelected}
      >
        <RadioInput
          checked={selected}
          aria-checked={selected}
          ref={ref}
          name={name}
          value={value}
        />
        <div data-testid="radio-content">
          <StyledReactMarkdown source={label} />
        </div>
      </RdoContainer>
    );
  }
);

export default Radio;
