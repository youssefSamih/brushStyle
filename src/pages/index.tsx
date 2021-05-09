import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Layout from 'ui/Layout';
import Headerlinks from 'data/Headerlinks.json';
import homeData from 'data/homeData.json';
import filterHeaderLink from 'utils/filterHeaderLink';
import { useAuth } from 'lib/auth';
import { useRouter } from 'next/router';
import React from 'react';
import Main from 'modules/landing/containers/Main';

const Index = ({
  Headerlinks,
  homeData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const auth = useAuth();
  const router = useRouter();
  const newHeaderlinks: any = filterHeaderLink(Headerlinks, auth);
  React.useEffect(() => {
    if (!auth?.user.email || !auth?.user.emailVerified) {
      router?.push('/login');
    }
  }, []);
  return (
    <Layout variant="secondary" links={newHeaderlinks}>
      <Main {...{ homeData }} />
    </Layout>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { Headerlinks, homeData },
  };
};
