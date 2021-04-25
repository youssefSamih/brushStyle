import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import Headerlinks from 'data/Headerlinks.json';
import forgotPasswordData from 'data/forgotPassword.json';
import Layout from 'ui/Layout';
import MainForgotPassword from 'modules/auth/containers/MainForgotPassword';
import { ImageContainer } from 'modules/auth/containers/styles';
import { useAuth } from 'lib/auth';
import filterHeaderLink from 'utils/filterHeaderLink';
import { useRouter } from 'next/router';

const ForgotPassword = ({
  Headerlinks,
  forgotPasswordData,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const auth = useAuth();
  React.useEffect(() => {
    if (auth?.user.emailVerified) {
      router.replace('/');
    }
  }, []);
  const newHeaderlinks: any = filterHeaderLink(Headerlinks, auth);
  return (
    <Layout variant="secondary" links={newHeaderlinks}>
      <ImageContainer>
        <MainForgotPassword {...{ forgotPasswordData }} />
      </ImageContainer>
    </Layout>
  );
};

export default ForgotPassword;

export const getStaticProps: GetStaticProps<{
  Headerlinks: typeof Headerlinks;
  forgotPasswordData: typeof forgotPasswordData;
}> = async () => {
  return {
    props: { Headerlinks, forgotPasswordData },
  };
};
