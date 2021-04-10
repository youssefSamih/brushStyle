import { BASE_URL } from 'config';
import { ImageProps } from 'interfaces';
import styled from 'styled-components';

export const MainAuthContainer = styled.div`
  box-shadow: ${({ theme }) => theme.colors.grey[800]} 0px 6px 6px 0px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  margin-top: 10rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 0;
  }
`;

export const ImageContainer = styled.div<ImageProps>`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    ${({ bg }) => (bg ? `url(${BASE_URL}${bg})` : 'url(/images/bg.jpg)')};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: ${({ heightInherit }) => (heightInherit ? 'inherit' : 'auto')};
  }
`;
