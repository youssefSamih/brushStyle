import RenderWidgets from 'core/RenderWidgets';
import { useForm } from 'react-hook-form';
import loginSections from 'data/login.json';
import customMessage from 'data/customMessage.json';
import Notifications from 'modules/auth/components/Notifications';
import React from 'react';
import { useAuth } from 'lib/auth';

const codeEmailNotVerified = 'auth/email-not-verified';
const Login = ({ loginData }: { loginData: typeof loginSections }) => {
  const auth = useAuth();
  const loading = auth?.loading;
  const apiMsg = auth?.msg;
  const emailNotVerifiedError =
    auth?.user.emailVerified === false
      ? customMessage.filter(
          (errMsg) => errMsg.code === codeEmailNotVerified
        )[0]
      : {};
  const useFormMthods = useForm({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
  });
  const messages = {
    apiMsg: { ...apiMsg, ...emailNotVerifiedError },
  };
  const onSubmit = (e: any) => {
    const { email, password } = e[loginData?.formKey];
    auth?.signInWithEmailAndPassword(email, password, '/');
  };
  return (
    <form onSubmit={useFormMthods.handleSubmit(onSubmit)}>
      {messages && <Notifications {...{ messages }} />}
      <RenderWidgets
        singleStepWidgets={loginData}
        {...{ useFormMthods, loading }}
      />
    </form>
  );
};

export default Login;
