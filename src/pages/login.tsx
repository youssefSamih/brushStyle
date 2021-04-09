import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import Headerlinks from 'data/Headerlinks.json';
import Layout from 'ui/Layout';

const Login = ({
  Headerlinks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout variant="secondary" links={Headerlinks}>
      <div>Login</div>
    </Layout>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { Headerlinks },
  };
};
