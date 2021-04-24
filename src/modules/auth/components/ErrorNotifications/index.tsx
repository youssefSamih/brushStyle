import React from 'react';
import { DeepMap, FieldError, FieldValues } from 'react-hook-form';
import Notification from 'ui/Notification';

const ErrorNotifications = ({
  errors,
}: {
  errors: DeepMap<FieldValues, FieldError>;
}) => {
  const [state, setState] = React.useState<string[]>([]);
  React.useEffect(() => {
    if (errors) {
      const errorMessage: string[] = [];
      for (const key in errors) {
        if (Object.prototype.hasOwnProperty.call(errors, key)) {
          const element = errors[key];
          element?.message !== '' &&
            element?.message != null &&
            errorMessage.push(element?.message);
        }
      }
      setState(errorMessage);
    }
  }, [Object.keys(errors).map((key) => errors[key]).length]);
  const onClick = (msg: string) => {
    setState([...state.filter((val) => val !== msg)]);
  };
  return (
    <>
      {state.map((msg, i) => (
        <Notification
          key={i}
          {...{ msg }}
          state="danger"
          onClick={() => onClick(msg)}
        />
      ))}
    </>
  );
};

export default ErrorNotifications;
