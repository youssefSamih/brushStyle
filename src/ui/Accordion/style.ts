import styled from 'styled-components';
import { PanelProps } from 'interfaces';

export const AccordionButton = styled.button<PanelProps>`
  background-color: ${({ theme }) => theme.colors.grey[500]};
  color: ${({ theme }) => theme.colors.grey[900]};
  cursor: pointer;
  padding: 1.4rem;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 1em;
  transition: 0.4s;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey[400]};
  }

  &:after {
    color: ${({ theme }) => theme.colors.grey[700]};
    font-weight: bold;
    float: right;
    margin-left: 0.5rem;
  }
`;

export const Panel = styled.div<PanelProps>`
  ${({ Display }) => (Display ? '' : 'display: none;')}
  padding: 0 1.4rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.grey[500]};
`;

export const AccordionTitle = styled.p`
  margin: 0;
`;

export const IconAcc = styled.div`
  font-size: 1.4em;
`;
