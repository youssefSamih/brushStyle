import { BASE_URL } from 'config';
import { ImageProps } from 'interfaces';
import styled from 'styled-components';

export const MainAuthContainer = styled.div`
  box-shadow: ${({ theme }) => theme.colors.grey[800]} 0px 6px 6px 0px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
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
  min-height: 100vh;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 6rem 0;
    height: ${({ heightImage }) => (heightImage ? heightImage + 'vh' : 'auto')};
  }
`;
