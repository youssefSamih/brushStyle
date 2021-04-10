import { Section } from 'interfaces';
import React from 'react';
import * as widgets from 'core/widgets';

const RenderWidget = ({ elem }: { elem: Section }) => {
  const Widget = widgets[elem.widget];
  return <Widget {...elem} />;
};

export default RenderWidget;
