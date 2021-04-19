import RenderWidgets from 'core/RenderWidgets';
import { useAuth } from 'lib/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorNotifications from '../ErrorNotifications';

const User = ({ userSignup }: any) => {
  const [state, setState] = React.useState(false);
  const auth = useAuth();
  const loading = auth.loading;
  const useFormMthods = useForm({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
  });
  const errors = useFormMthods.formState.errors[userSignup?.formKey];
  const onSubmit = (e: any) => {
    const { email, password, ...rest } = e[userSignup?.formKey];
    auth.createUserWithEmailAndPassword(email, password, '/login', {
      otherInfo: rest,
    });
  };
  return (
    <form
      onSubmit={useFormMthods.handleSubmit(onSubmit)}
      onClick={() => setState(true)}
    >
      {state && errors && <ErrorNotifications {...{ errors }} />}
      <RenderWidgets
        singleStepWidgets={userSignup}
        {...{ useFormMthods, loading }}
      />
    </form>
  );
};

export default User;
