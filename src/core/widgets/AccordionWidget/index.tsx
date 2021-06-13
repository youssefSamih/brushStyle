import React from 'react';
import { AccordionSection } from 'interfaces';
import Accordion from 'ui/Accordion';
import { AccordionContainer } from './style';

interface AccordionWidgetProps {
  data: AccordionSection[];
}

export const AccordionWidget = ({ data }: AccordionWidgetProps) => {
  return (
    <AccordionContainer>
      {data.map((section, key) => (
        <Accordion {...{ section, key }} />
      ))}
    </AccordionContainer>
  );
};
