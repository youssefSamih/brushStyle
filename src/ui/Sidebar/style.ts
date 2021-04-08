import styled from 'styled-components';

interface SideBarProps {
  active?: boolean;
  side: 'left' | 'right';
}

interface SidebarDimProps {
  active?: boolean;
}

export const SideBarWrapper = styled.div<SideBarProps>`
  position: fixed;
  top: 0;
  z-index: 6;
  width: 300px;
  max-width: 80%;
  padding-bottom: 1.375rem;
  min-height: 360px;
  height: 100%;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme.colors.grey[900]};
  transition: 500ms;
  visibility: hidden;

  ${({ active, side }) => {
    if (side === 'left') {
      return active ? `visibility: visible;left: 0px;` : `left: -300px;`;
    } else {
      return active ? `visibility: visible;right: 0px;` : `right: -300px;`;
    }
  }}
`;

export const SidebarDim = styled.div<SidebarDimProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: transparent;
  width: 100vw;
  height: 100vh;

  transition: background-color 500ms;
  visibility: hidden;

  ${({ active }) => {
    return active && `visibility: visible;background-color:rgba(0, 0, 0, 0.3)`;
  }}
`;
