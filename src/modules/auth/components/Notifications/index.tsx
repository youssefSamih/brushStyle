import React from 'react';
import { DeepMap, FieldError, FieldValues } from 'react-hook-form';
import Notification from 'ui/Notification';

interface NotifTypes {
  state: string;
  message: string;
}

const ErrorNotifications = ({
  messages,
}: {
  messages: DeepMap<FieldValues, FieldError>;
}) => {
  const [state, setState] = React.useState<NotifTypes[]>([]);
  React.useEffect(() => {
    if (messages) {
      const errorMessage: NotifTypes[] = [];
      for (const key in messages) {
        if (Object.prototype.hasOwnProperty.call(messages, key)) {
          const element = messages[key];
          element?.message !== '' &&
            element?.message != null &&
            errorMessage.push({
              state: element.type,
              message: element?.message,
            });
        }
      }
      setState(errorMessage);
    }
  }, [...Object.keys(messages).map((key) => messages[key])]);
  const onClick = (msg: string) => {
    setState([...state.filter((val) => val.message !== msg)]);
  };
  return (
    <>
      {state.map((msg, i) => (
        <Notification
          key={i}
          {...{ msg: msg.message }}
          state={msg.state}
          onClick={() => onClick(msg.message)}
        />
      ))}
    </>
  );
};

export default ErrorNotifications;
