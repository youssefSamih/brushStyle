import styled from 'styled-components';
import { Item } from 'react-flex-ready';
import { ItemWrapperContainerProps } from 'core/interfaces';

export const ItemWrapperContainer = styled(Item)<ItemWrapperContainerProps>`
  margin-top: 10rem;
  ${({ backgroundColor }) =>
    backgroundColor ? `background-color:${backgroundColor};` : ''};
`;
