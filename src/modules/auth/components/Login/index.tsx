import RenderWidgets from 'core/RenderWidgets';
import { useForm } from 'react-hook-form';
import loginSections from 'data/login.json';
import ErrorNotifications from '../ErrorNotifications';

const Login = ({ loginData }: { loginData: typeof loginSections }) => {
  const useFormMthods = useForm({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
  });
  const errors = useFormMthods.formState.errors[loginSections?.formKey];
  const onSubmit = (e: any) => console.log(e);
  return (
    <form onSubmit={useFormMthods.handleSubmit(onSubmit)}>
      {errors && <ErrorNotifications {...{ errors }} />}
      <RenderWidgets singleStepWidgets={loginData} {...{ useFormMthods }} />
    </form>
  );
};

export default Login;
