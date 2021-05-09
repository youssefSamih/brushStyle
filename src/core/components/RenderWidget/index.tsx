import { Section } from 'interfaces';
import React from 'react';
import * as widgets from 'core/widgets';
import { FieldValues, UseFormReturn } from 'react-hook-form';

const RenderWidget = ({
  elem,
  useFormMthods,
  loading,
}: {
  elem: Section;
  useFormMthods?: UseFormReturn<FieldValues>;
  loading?: boolean;
}) => {
  const Widget = widgets[elem.widget];
  return <Widget {...{ ...elem, useFormMthods, loading }} />;
};

export default RenderWidget;
