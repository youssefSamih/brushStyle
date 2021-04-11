import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import Headerlinks from 'data/Headerlinks.json';
import loginData from 'data/login.json';
import Layout from 'ui/Layout';
import MainLogin from 'modules/auth/containers/MainLogin';
import { ImageContainer } from 'modules/auth/containers/styles';

const Login = ({
  Headerlinks,
  loginData,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <ImageContainer heightInherit>
      <Layout variant="secondary" links={Headerlinks}>
        <MainLogin {...{ loginData }} />
      </Layout>
    </ImageContainer>
  );
};

export default Login;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { Headerlinks, loginData },
  };
};
