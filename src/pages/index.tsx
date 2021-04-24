import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import Layout from 'ui/Layout';
import Headerlinks from 'data/Headerlinks.json';
import filterHeaderLink from 'utils/filterHeaderLink';
import { useAuth } from 'lib/auth';

const Index = ({
  Headerlinks,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const auth = useAuth();
  const newHeaderlinks: any = filterHeaderLink(Headerlinks, auth);
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
