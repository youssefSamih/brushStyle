import { LoaderIcon } from 'ui/Icons';

import { SvgAnimation } from './style';

const Loader = (props: {
  toColor?: string;
  fromColor?: string;
  height?: string;
  width?: string;
}) => (
  <div>
    <LoaderIcon as={SvgAnimation} {...props} />
  </div>
);

export default Loader;
