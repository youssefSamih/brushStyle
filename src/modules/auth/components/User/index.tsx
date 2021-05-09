import RenderWidgets from 'core/RenderWidgets';
import { useAuth } from 'lib/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import Notifications from 'modules/auth/components/Notifications';

const User = ({ userSignup }: any) => {
  const [state, setstate] = React.useState(false);
  const auth = useAuth();
  const loading = auth?.loading;
  const apiMsg = auth?.msg;
  const useFormMthods = useForm({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
  });
  const messages = {
    apiMsg: { ...apiMsg },
  };
  const onSubmit = (e: any) => {
    const { email, password, ...rest } = e[userSignup?.formKey];
    auth?.createUserWithEmailAndPassword(email, password, '/login', {
      otherInfo: rest,
    });
    setstate(true);
  };
  return (
    <form onSubmit={useFormMthods.handleSubmit(onSubmit)}>
      {state && messages && <Notifications {...{ messages }} />}
      <RenderWidgets dataWidgets={userSignup} {...{ useFormMthods, loading }} />
    </form>
  );
};

export default User;
