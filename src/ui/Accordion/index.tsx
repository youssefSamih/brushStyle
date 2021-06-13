import React from 'react';
import { AccordionSection, PanelProps } from 'interfaces';
import { AccordionButton, AccordionTitle, IconAcc, Panel } from './style';

type AccordionProps = {
  onClick?: VoidFunction;
  section: AccordionSection;
} & PanelProps;

const Accordion = ({ section, Display }: AccordionProps) => {
  const [state, setState] = React.useState(!!Display);
  return (
    <>
      <AccordionButton onClick={() => setState(!state)} Display={state}>
        <AccordionTitle>{section.title}</AccordionTitle>
        <IconAcc>{state ? '-' : '+'}</IconAcc>
      </AccordionButton>
      <Panel {...{ Display: state }}>
        <p dangerouslySetInnerHTML={{ __html: section.text }} />
      </Panel>
    </>
  );
};

export default Accordion;
