import { Section } from 'interfaces';
import React from 'react';
import Slider from 'ui/Slider';

export const SliderWidget = ({
  images = [],
  slidesToScroll,
  showDots,
  slidesToShow,
  marginBottom,
  marginRightSlideItem,
}: Section) => {
  return (
    <Slider
      {...{
        images,
        slidesToScroll,
        showDots,
        slidesToShow,
        marginBottom,
        marginRightSlideItem,
      }}
    />
  );
};
