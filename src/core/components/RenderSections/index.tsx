import { Section } from 'interfaces';
import React from 'react';
import { Flex } from 'react-flex-ready';
import RenderWidget from 'core/components/RenderWidget';

const RenderSections = ({ sections = [] }: { sections: Section[] }) => {
  return (
    <Flex>
      {sections.map((elem: Section, index: number) => {
        return (
          <React.Fragment key={index}>
            <RenderWidget {...{ elem }} />
          </React.Fragment>
        );
      })}
    </Flex>
  );
};

export default RenderSections;
