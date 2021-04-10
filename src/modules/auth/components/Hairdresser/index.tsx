import React from 'react';
import hairdresserSignup from 'data/hairdresserSignup.json';
import RenderWidgets from 'core/RenderWidgets';

const Hairdresser = () => {
  return <RenderWidgets singleStepWidgets={hairdresserSignup} />;
};

export default Hairdresser;
