import RenderWidgets from 'core/RenderWidgets';
import { useForm } from 'react-hook-form';
import loginSections from 'data/login.json';
import customMessageError from 'data/customMessageError.json';
import ErrorNotifications from 'modules/auth/components/ErrorNotifications';
import React from 'react';
import { useAuth } from 'lib/auth';

const codeEmailNotVerified = 'auth/email-not-verified';
const Login = ({ loginData }: { loginData: typeof loginSections }) => {
  const auth = useAuth();
  const loading = auth.loading;
  const apiErrors = auth.errors;
  const emailNotVerifiedError =
    auth.user.emailVerified === false
      ? customMessageError.filter(
          (errMsg) => errMsg.code === codeEmailNotVerified
        )[0]
      : {};
  const useFormMthods = useForm({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
  });
  const errors = {
    apiErrors: { ...apiErrors, ...emailNotVerifiedError },
  };
  const onSubmit = (e: any) => {
    const { email, password } = e[loginData?.formKey];
    auth.signInWithEmailAndPassword(email, password, '/');
  };
  return (
    <form onSubmit={useFormMthods.handleSubmit(onSubmit)}>
      {errors && <ErrorNotifications {...{ errors }} />}
      <RenderWidgets
        singleStepWidgets={loginData}
        {...{ useFormMthods, loading }}
      />
    </form>
  );
};

export default Login;
