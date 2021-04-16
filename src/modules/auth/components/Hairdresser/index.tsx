import React from 'react';
import RenderWidgets from 'core/RenderWidgets';
import { useForm } from 'react-hook-form';

const Hairdresser = ({ hairdresserSignup }: any) => {
  const useFormMthods = useForm({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
  });
  const onSubmit = (e: any) => console.log(e);
  return (
    <form onSubmit={useFormMthods.handleSubmit(onSubmit)}>
      <RenderWidgets
        singleStepWidgets={hairdresserSignup}
        {...{ useFormMthods }}
      />
    </form>
  );
};

export default Hairdresser;
