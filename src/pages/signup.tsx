import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import Headerlinks from 'data/Headerlinks.json';
import Layout from 'ui/Layout';
import MainSignup from 'modules/auth/containers/MainSignup';

const Signup = ({
  Headerlinks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout variant="secondary" links={Headerlinks}>
      <MainSignup />
    </Layout>
  );
};

export default Signup;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { Headerlinks },
  };
};
