import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import Headerlinks from 'data/Headerlinks.json';
import userSignup from 'data/userSignup.json';
import hairdresserSignup from 'data/hairdresserSignup.json';
import Layout from 'ui/Layout';
import MainSignup from 'modules/auth/containers/MainSignup';

const Signup = ({
  Headerlinks,
  userSignup,
  hairdresserSignup,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout variant="secondary" links={Headerlinks}>
      <MainSignup {...{ userSignup, hairdresserSignup }} />
    </Layout>
  );
};

export default Signup;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { Headerlinks, userSignup, hairdresserSignup },
  };
};
