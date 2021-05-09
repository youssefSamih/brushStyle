import RenderSections from 'core/components/RenderSections';
import { RendererData, Section } from 'interfaces';

const Main = ({ homeData }: { homeData: RendererData }) => {
  return (
    <div>
      <RenderSections sections={(homeData as unknown) as Section[]} />
    </div>
  );
};

export default Main;
