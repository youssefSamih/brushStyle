import { Section } from 'interfaces';
import React from 'react';
import { Flex } from 'react-flex-ready';
import RenderWidget from 'core/components/RenderWidget';
import { FieldValues, UseFormReturn } from 'react-hook-form';

const RenderSections = ({
  sections = [],
  useFormMthods,
}: {
  sections: Section[];
  useFormMthods: UseFormReturn<FieldValues>;
}) => {
  return (
    <Flex>
      {sections.map((elem: Section, index: number) => {
        return (
          <React.Fragment key={index}>
            <RenderWidget {...{ elem, useFormMthods }} />
          </React.Fragment>
        );
      })}
    </Flex>
  );
};

export default RenderSections;
