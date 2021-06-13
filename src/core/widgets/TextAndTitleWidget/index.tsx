import { TextAndTitleContainerProps, TitleAlignProp } from 'core/interfaces';
import React from 'react';
import { TextAndTitleContainer, TitleAlign } from './style';

interface TextAndTitleWidgetProps {
  title?: string;
  text: string;
}

type TextAndTitleWidgetTypes = TextAndTitleWidgetProps &
  TextAndTitleContainerProps &
  TitleAlignProp;

export const TextAndTitleWidget = ({
  title,
  text,
  marginRight,
  Color,
  textAlign,
}: TextAndTitleWidgetTypes) => {
  return (
    <TextAndTitleContainer {...{ marginRight, Color }}>
      {title && <TitleAlign {...{ textAlign }}>{title}</TitleAlign>}
      {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
    </TextAndTitleContainer>
  );
};
