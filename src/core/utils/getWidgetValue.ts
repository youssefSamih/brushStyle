export const getWidgetValue = (widgetValue: any) => {
  if (widgetValue) {
    if (typeof widgetValue === 'object' && widgetValue.key != null) {
      return widgetValue.value;
    } else if (typeof widgetValue === 'string') return widgetValue;
  }
};
