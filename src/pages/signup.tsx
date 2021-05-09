import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import Headerlinks from 'data/Headerlinks.json';
import userSignup from 'data/userSignup.json';
import hairdresserSignup from 'data/hairdresserSignup.json';
import Layout from 'ui/Layout';
import MainSignup from 'modules/auth/containers/MainSignup';
import { ImageContainer } from 'modules/auth/containers/styles';
import filterHeaderLink from 'utils/filterHeaderLink';
import { useAuth } from 'lib/auth';
import { useRouter } from 'next/router';

const Signup = ({
  Headerlinks,
  userSignup,
  hairdresserSignup,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const auth = useAuth();
  React.useEffect(() => {
    if (auth?.user.email && !auth.user.emailVerified) {
      router?.push('/login');
    } else if (auth?.user.email) {
      router?.push('/');
    }
  }, [auth]);
  const newHeaderlinks: any = filterHeaderLink(Headerlinks, auth);
  return (
    <Layout variant="secondary" links={newHeaderlinks}>
      <ImageContainer>
        <MainSignup {...{ userSignup, hairdresserSignup }} />
      </ImageContainer>
    </Layout>
  );
};

export default Signup;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { Headerlinks, userSignup, hairdresserSignup },
  };
};
