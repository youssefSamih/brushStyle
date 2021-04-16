import React from 'react';
import RadioInput from 'ui/RadioInput';

import { RdoContainer, StyledReactMarkdown } from './styles';

interface RadioProps {
  label?: string;
  selected?: boolean;
  state?: string;
  onClick?: (e: React.MouseEvent) => void;
  onChange?: (e: boolean) => void;
  register?: Record<string, unknown>;
  name?: string;
  value?: string;
  DoNotshowShadow?: boolean;
  centerVertically?: boolean;
  noBorderSelected?: boolean;
}

const Radio = ({
  label = '',
  state = '',
  selected,
  name = '',
  value,
  DoNotshowShadow,
  centerVertically = false,
  noBorderSelected,
  register,
  onChange,
}: RadioProps) => {
  const toggleCheck = (e?: { target: { checked: boolean } }) => {
    onChange?.(e?.target.checked || !selected);
  };
  return (
    <RdoContainer
      DoNotshowShadow={DoNotshowShadow}
      centerVertically={centerVertically}
      selected={selected}
      state={state}
      onClick={() => toggleCheck()}
      data-testid="radio-container"
      noBorderSelected={noBorderSelected}
      {...register}
    >
      <RadioInput
        aria-checked={selected}
        name={name}
        value={value}
        checked={selected}
        onChange={(e) => toggleCheck(e)}
        {...register}
      />
      <div data-testid="radio-content">
        <StyledReactMarkdown source={label} />
      </div>
    </RdoContainer>
  );
};

export default Radio;
