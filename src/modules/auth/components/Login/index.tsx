import RenderWidgets from 'core/RenderWidgets';
import { useForm } from 'react-hook-form';
import loginSections from 'data/login.json';
import ErrorNotifications from '../ErrorNotifications';
import React from 'react';
import { useAuth } from 'lib/auth';

const Login = ({ loginData }: { loginData: typeof loginSections }) => {
  const [state, setstate] = React.useState(false);
  const auth = useAuth();
  const loading = auth.loading;
  let apiErrors = auth.errors;
  const useFormMthods = useForm({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
  });
  const errors = {
    apiErrors: { ...apiErrors },
  };
  const onSubmit = (e: any) => {
    const { email, password } = e[loginData?.formKey];
    auth.signInWithEmailAndPassword(email, password, '/');
    setstate(true);
  };
  return (
    <form onSubmit={useFormMthods.handleSubmit(onSubmit)}>
      {state && errors && <ErrorNotifications {...{ errors }} />}
      <RenderWidgets
        singleStepWidgets={loginData}
        {...{ useFormMthods, loading }}
      />
    </form>
  );
};

export default Login;
