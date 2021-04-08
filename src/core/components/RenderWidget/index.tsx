import { Section } from 'interfaces';
import React from 'react';

const RenderWidget = ({ elem }: { elem: Section }) => {
  const Widget = elem.widget;
  return <Widget />;
};

export default RenderWidget;
