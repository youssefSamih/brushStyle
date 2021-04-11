import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import Layout from 'ui/Layout';
import Headerlinks from 'data/Headerlinks.json';

const Index = ({
  Headerlinks,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <Layout variant="secondary" links={Headerlinks}>
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
