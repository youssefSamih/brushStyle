import RenderSections from 'core/components/RenderSections';
import React from 'react';
import { Container } from 'ui/styles';

const RenderWidgets = ({
  singleStepWidgets = {},
}: {
  singleStepWidgets: any;
}) => {
  return (
    <Container>
      <RenderSections sections={singleStepWidgets.sections} />
    </Container>
  );
};

export default RenderWidgets;
