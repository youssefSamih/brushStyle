import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Layout from 'ui/Layout';
import Headerlinks from 'data/Headerlinks.json';

const Index = ({
  Headerlinks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout variant="secondary" links={Headerlinks}>
      <div>hello</div>
    </Layout>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { Headerlinks },
  };
};
