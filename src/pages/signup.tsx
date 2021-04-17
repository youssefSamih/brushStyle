import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import Headerlinks from 'data/Headerlinks.json';
import userSignup from 'data/userSignup.json';
import hairdresserSignup from 'data/hairdresserSignup.json';
import Layout from 'ui/Layout';
import MainSignup from 'modules/auth/containers/MainSignup';
import { ImageContainer } from 'modules/auth/containers/styles';

const Signup = ({
  Headerlinks,
  userSignup,
  hairdresserSignup,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <Layout variant="secondary" links={Headerlinks} marginBottom={16}>
      <ImageContainer>
        <MainSignup {...{ userSignup, hairdresserSignup }} />
      </ImageContainer>
    </Layout>
  );
};

export default Signup;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { Headerlinks, userSignup, hairdresserSignup },
  };
};
