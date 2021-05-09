import RenderSections from 'core/components/RenderSections';
import React from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { Container } from 'ui/styles';

const RenderWidgets = ({
  dataWidgets = {},
  useFormMthods,
  loading,
}: {
  dataWidgets: any;
  useFormMthods?: UseFormReturn<FieldValues>;
  loading?: boolean;
}) => {
  return (
    <Container>
      <RenderSections
        sections={dataWidgets.sections}
        {...{ useFormMthods, loading }}
      />
    </Container>
  );
};

export default RenderWidgets;
