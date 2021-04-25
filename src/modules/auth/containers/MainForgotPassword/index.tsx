import { Tab } from 'interfaces';
import ForgotPassword from 'modules/auth/components/ForgotPassword';
import React from 'react';
import { Container } from 'ui/styles';
import TabLayout from 'ui/TabLayout';
import { MainAuthContainer } from '../styles';

const MainForgotPassword = ({ forgotPasswordData }: any) => {
  const tabs: Tab[] = [
    {
      title: 'Forgot Password',
      content: <ForgotPassword {...{ forgotPasswordData }} />,
    },
  ];
  return (
    <Container>
      <MainAuthContainer>
        <TabLayout tabs={tabs} />
      </MainAuthContainer>
    </Container>
  );
};

export default MainForgotPassword;
