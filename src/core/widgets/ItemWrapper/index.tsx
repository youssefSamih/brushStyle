import RenderWidget from 'core/components/RenderWidget';
import { Section, StyledDiv } from 'interfaces';
import React from 'react';
import { Flex, Item } from 'react-flex-ready';

export const ItemWrapper = ({ sections }: { sections: Section[] }) => {
  return (
    <Item as={Flex as StyledDiv} col={12}>
      {sections.map((elem: Section, index: number) => {
        return (
          <Item key={index} col={elem.columnWidget}>
            <RenderWidget {...{ elem }} />
          </Item>
        );
      })}
    </Item>
  );
};
