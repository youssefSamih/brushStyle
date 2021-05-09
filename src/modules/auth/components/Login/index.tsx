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
  const [state, setState] = React.useState({
    emailNotVerifiedError: {},
    apiMsg: {},
  });
  React.useEffect(() => {
    if (auth?.user.emailVerified === false) {
      setState((prevState) => ({
        ...prevState,
        emailNotVerifiedError: customMessage.filter(
          (errMsg) => errMsg.code === codeEmailNotVerified
        )[0],
      }));
    }
    if (auth?.msg) {
      setState((prevState) => ({
        ...prevState,
        apiMsg: auth?.msg || {},
      }));
    }
  }, [auth?.user.emailVerified, auth?.msg]);
  const loading = auth?.loading;
  const useFormMthods = useForm({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
  });
  const messages = {
    apiMsg: { ...state.apiMsg, ...state.emailNotVerifiedError },
  };
  const onSubmit = (e: any) => {
    const { email, password } = e[loginData?.formKey];
    auth?.signInWithEmailAndPassword(email, password, '/');
  };
  return (
    <form onSubmit={useFormMthods.handleSubmit(onSubmit)}>
      {messages && <Notifications {...{ messages }} />}
      <RenderWidgets dataWidgets={loginData} {...{ useFormMthods, loading }} />
    </form>
  );
};

export default Login;
