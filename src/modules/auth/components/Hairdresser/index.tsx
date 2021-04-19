import React from 'react';
import RenderWidgets from 'core/RenderWidgets';
import { useForm } from 'react-hook-form';
import ErrorNotifications from '../ErrorNotifications';

const Hairdresser = ({ hairdresserSignup }: any) => {
  const [state, setState] = React.useState(false);
  const useFormMthods = useForm({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
  });
  const errors = useFormMthods.formState.errors[hairdresserSignup?.formKey];
  const onSubmit = (e: any) => console.log(e);
  return (
    <form
      onSubmit={useFormMthods.handleSubmit(onSubmit)}
      onClick={() => setState(true)}
    >
      {state && errors && <ErrorNotifications {...{ errors }} />}
      <RenderWidgets
        singleStepWidgets={hairdresserSignup}
        {...{ useFormMthods }}
      />
    </form>
  );
};

export default Hairdresser;
