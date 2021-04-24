import { Item } from 'react-flex-ready';
import Divider from 'ui/Divider';

import { DividerContainer } from './style';

interface DividerWidgetProps {
  marginTop?: string;
  marginBottom?: string;
  withoutBorder?: boolean;
  $if?: { $eq: string[] };
}

export const DividerWidget = ({
  marginTop = '',
  marginBottom,
  withoutBorder,
}: DividerWidgetProps) => {
  return (
    <Item>
      <DividerContainer margTop={marginTop} margBottom={marginBottom}>
        {!withoutBorder && <Divider />}
      </DividerContainer>
    </Item>
  );
};

export default DividerWidget;
