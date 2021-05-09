import { Section } from 'interfaces';
import React from 'react';
import Slider from 'ui/Slider';

export const SliderWidget = ({ images = [] }: Section) => {
  return <Slider {...{ images }} />;
};
