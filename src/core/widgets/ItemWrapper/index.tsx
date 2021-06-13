import React from 'react';
import { Flex, Item } from 'react-flex-ready';
import { Section, StyledDiv } from 'interfaces';
import RenderWidget from 'core/components/RenderWidget';
import { ItemWrapperContainerProps } from 'core/interfaces';
import { ItemWrapperContainer } from './style';

export const ItemWrapper = ({
  sections,
  backgroundColor,
}: { sections: Section[] } & ItemWrapperContainerProps) => {
  return (
    <ItemWrapperContainer
      as={Flex as StyledDiv}
      col={12}
      {...{ backgroundColor }}
    >
      {sections.map((elem: Section, index: number) => {
        return (
          <Item key={index} col={elem.columnWidget}>
            <RenderWidget {...{ elem }} />
          </Item>
        );
      })}
    </ItemWrapperContainer>
  );
};
