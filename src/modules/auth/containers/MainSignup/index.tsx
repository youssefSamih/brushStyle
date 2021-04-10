import { Tab } from 'interfaces';
import Hairdresser from 'modules/auth/components/Hairdresser';
import User from 'modules/auth/components/User';
import React from 'react';
import { Container } from 'ui/styles';
import TabLayout from 'ui/TabLayout';
import { MainSignupContainer } from './style';

const tabs: Tab[] = [
  {
    title: 'Particulier',
    content: <User />,
  },
  {
    title: 'Coiffeur',
    content: <Hairdresser />,
  },
];

const MainSignup = () => {
  return (
    <Container>
      <MainSignupContainer>
        <TabLayout tabs={tabs}>Signup</TabLayout>
      </MainSignupContainer>
    </Container>
  );
};

export default MainSignup;
