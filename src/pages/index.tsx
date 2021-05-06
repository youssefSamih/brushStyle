import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import Layout from 'ui/Layout';
import Headerlinks from 'data/Headerlinks.json';
import filterHeaderLink from 'utils/filterHeaderLink';
import { useAuth } from 'lib/auth';
import { useRouter } from 'next/router';
import React from 'react';

const Index = ({
  Headerlinks,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
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
      <div>hello</div>
    </Layout>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { Headerlinks },
  };
};
