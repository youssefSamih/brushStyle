import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import Headerlinks from 'data/Headerlinks.json';
import loginData from 'data/login.json';
import Layout from 'ui/Layout';
import MainLogin from 'modules/auth/containers/MainLogin';
import { ImageContainer } from 'modules/auth/containers/styles';
import { useAuth } from 'lib/auth';
import filterHeaderLink from 'utils/filterHeaderLink';
import { useRouter } from 'next/router';

const Login = ({
  Headerlinks,
  loginData,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const auth = useAuth();
  React.useEffect(() => {
    if (auth?.user) {
      if (auth?.user.emailVerified) {
        router.replace('/');
      } else {
        auth.sendEmailConfirmation();
      }
    }
  }, [auth]);
  const newHeaderlinks: any = filterHeaderLink(Headerlinks, auth);
  return (
    <Layout variant="secondary" links={newHeaderlinks}>
      <ImageContainer>
        <MainLogin {...{ loginData }} />
      </ImageContainer>
    </Layout>
  );
};

export default Login;

export const getStaticProps: GetStaticProps<{
  Headerlinks: typeof Headerlinks;
  loginData: typeof loginData;
}> = async () => {
  return {
    props: { Headerlinks, loginData },
  };
};
