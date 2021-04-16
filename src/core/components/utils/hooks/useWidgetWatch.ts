import { ifProps } from 'interfaces';
import { Control, FieldValues, useWatch } from 'react-hook-form';

export const useWidgetWatch = ({
  $if,
  control,
}: {
  $if?: ifProps;
  control?: Control<FieldValues>;
}) => {
  if ($if && $if.$eq && control) {
    const widgetTowatch =
      $if.$eq[0].split(':')[0] === '_KEY_' ? $if.$eq[0].split(':')[1] : '';
    const widgetsValue = useWatch({
      control,
      name: widgetTowatch,
      defaultValue: $if.defaultValue,
    });
    return { value: widgetsValue !== $if.$eq[1] };
  }
  return { value: false };
};
