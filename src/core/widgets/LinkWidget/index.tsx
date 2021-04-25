import { Section } from 'interfaces';
import CustomLink from 'ui/CustomLink';

export const LinkWidget = ({ link, label }: Section) => {
  return <CustomLink {...{ label, link }} />;
};
