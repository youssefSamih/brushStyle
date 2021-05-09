import RenderSections from 'core/components/RenderSections';
import homeData from 'data/homeData.json';
import { Section } from 'interfaces';

const Main = () => {
  return (
    <div>
      <RenderSections sections={(homeData as unknown) as Section[]} />
    </div>
  );
};

export default Main;
