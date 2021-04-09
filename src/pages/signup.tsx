import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import Headerlinks from 'data/Headerlinks.json';
import Layout from 'ui/Layout';

const Signup = ({
  Headerlinks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout variant="secondary" links={Headerlinks}>
      <div>Signup</div>
    </Layout>
  );
};

export default Signup;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { Headerlinks },
  };
};
