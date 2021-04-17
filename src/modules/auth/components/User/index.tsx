import RenderWidgets from 'core/RenderWidgets';
import { useForm } from 'react-hook-form';
import ErrorNotifications from '../ErrorNotifications';

const User = ({ userSignup }: any) => {
  const useFormMthods = useForm({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
  });
  const errors = useFormMthods.formState.errors[userSignup?.formKey];
  const onSubmit = (e: any) => console.log(e);
  return (
    <form onSubmit={useFormMthods.handleSubmit(onSubmit)}>
      {errors && <ErrorNotifications {...{ errors }} />}
      <RenderWidgets singleStepWidgets={userSignup} {...{ useFormMthods }} />
    </form>
  );
};

export default User;
