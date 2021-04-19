import { Section } from 'interfaces';
import React from 'react';
import { Flex } from 'react-flex-ready';
import RenderWidget from 'core/components/RenderWidget';
import { FieldValues, UseFormReturn } from 'react-hook-form';

const RenderSections = ({
  sections = [],
  useFormMthods,
  loading,
}: {
  sections: Section[];
  useFormMthods: UseFormReturn<FieldValues>;
  loading?: boolean;
}) => {
  return (
    <Flex>
      {sections.map((elem: Section, index: number) => {
        return (
          <React.Fragment key={index}>
            <RenderWidget {...{ elem, useFormMthods, loading }} />
          </React.Fragment>
        );
      })}
    </Flex>
  );
};

export default RenderSections;
