import React from 'react';
import RenderWidgets from 'core/RenderWidgets';
import { useForm } from 'react-hook-form';
import { useAuth } from 'lib/auth';
import ErrorNotifications from '../ErrorNotifications';

const Hairdresser = ({ hairdresserSignup }: any) => {
  const [state, setstate] = React.useState(false);
  const auth = useAuth();
  const loading = auth.loading;
  const apiErrors = auth.errors;
  const useFormMthods = useForm({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
  });
  const errors = {
    apiErrors: { ...apiErrors },
  };
  const onSubmit = (e: any) => {
    const { email, password, ...rest } = e[hairdresserSignup?.formKey];
    Object.keys(rest).forEach((key) => {
      return rest[key] === undefined && delete rest[key];
    });
    auth.createUserWithEmailAndPassword(email, password, '/login', {
      otherInfo: rest,
    });
    setstate(true);
  };
  return (
    <form onSubmit={useFormMthods.handleSubmit(onSubmit)}>
      {state && errors && <ErrorNotifications {...{ errors }} />}
      <RenderWidgets
        singleStepWidgets={hairdresserSignup}
        {...{ useFormMthods, loading }}
      />
    </form>
  );
};

export default Hairdresser;
