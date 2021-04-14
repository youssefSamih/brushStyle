import RenderSections from 'core/components/RenderSections';
import React from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { Container } from 'ui/styles';

const RenderWidgets = ({
  singleStepWidgets = {},
  useFormMthods,
}: {
  singleStepWidgets: any;
  useFormMthods: UseFormReturn<FieldValues>;
}) => {
  return (
    <Container>
      <RenderSections
        sections={singleStepWidgets.sections}
        {...{ useFormMthods }}
      />
    </Container>
  );
};

export default RenderWidgets;
