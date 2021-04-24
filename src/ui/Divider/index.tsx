import { HrProps, StyledDivider } from './styles';

const Divider = ({ margin, mobileHidden }: HrProps) => (
  <StyledDivider mobileHidden={mobileHidden} margin={margin} />
);

export default Divider;
