import styled from 'styled-components';
import { TextAndTitleContainerProps, TitleAlignProp } from 'core/interfaces';

export const TextAndTitleContainer = styled.div<TextAndTitleContainerProps>`
  text-align: center;
  font-family: 'Freight Big Bold';
  margin-right: ${({ marginRight }) =>
    marginRight ? `${marginRight}rem` : '-2rem'};
  ${({ Color }) => `color:${Color};` || ''}
`;

export const TitleAlign = styled.h3<TitleAlignProp>`
  text-align: ${({ textAlign }) => textAlign || 'center'};
`;
