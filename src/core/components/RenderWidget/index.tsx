import { Section } from 'interfaces';
import React from 'react';
import * as widgets from 'core/widgets';
import { FieldValues, UseFormReturn } from 'react-hook-form';

const RenderWidget = ({
  elem,
  useFormMthods,
}: {
  elem: Section;
  useFormMthods: UseFormReturn<FieldValues>;
}) => {
  const Widget = widgets[elem.widget];
  return <Widget {...{ ...elem, useFormMthods }} />;
};

export default RenderWidget;
