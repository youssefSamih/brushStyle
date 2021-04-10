import { Tab } from 'interfaces';
import Login from 'modules/auth/components/Login';
import React from 'react';
import { Container } from 'ui/styles';
import TabLayout from 'ui/TabLayout';
import { MainAuthContainer } from '../styles';

const MainLogin = ({ loginData }: any) => {
  const tabs: Tab[] = [
    {
      title: 'Login',
      content: <Login {...{ loginData }} />,
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

export default MainLogin;
