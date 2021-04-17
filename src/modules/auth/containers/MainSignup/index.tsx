import { Tab } from 'interfaces';
import Hairdresser from 'modules/auth/components/Hairdresser';
import User from 'modules/auth/components/User';
import React from 'react';
import { Container } from 'ui/styles';
import TabLayout from 'ui/TabLayout';
import { MainAuthContainer } from '../styles';

const MainSignup = ({ userSignup, hairdresserSignup }: any) => {
  const tabs: Tab[] = [
    {
      title: 'Particulier',
      content: <User {...{ userSignup }} />,
    },
    {
      title: 'Coiffeur',
      content: <Hairdresser {...{ hairdresserSignup }} />,
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

export default MainSignup;
