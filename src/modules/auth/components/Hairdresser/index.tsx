import React from 'react';
import RenderWidgets from 'core/RenderWidgets';
import { useForm } from 'react-hook-form';
import { useAuth } from 'lib/auth';
import Notifications from 'modules/auth/components/Notifications';

const Hairdresser = ({ hairdresserSignup }: any) => {
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
    const { email, password, ...rest } = e[hairdresserSignup?.formKey];
    Object.keys(rest).forEach((key) => {
      return rest[key] === undefined && delete rest[key];
    });
    auth?.createUserWithEmailAndPassword(email, password, '/login', {
      otherInfo: rest,
    });
    setstate(true);
  };
  return (
    <form onSubmit={useFormMthods.handleSubmit(onSubmit)}>
      {state && messages && <Notifications {...{ messages }} />}
      <RenderWidgets
        dataWidgets={hairdresserSignup}
        {...{ useFormMthods, loading }}
      />
    </form>
  );
};

export default Hairdresser;
