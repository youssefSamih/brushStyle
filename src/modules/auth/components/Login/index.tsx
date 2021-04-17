import RenderWidgets from 'core/RenderWidgets';
import { useForm } from 'react-hook-form';

const Login = ({ loginData }: any) => {
  const useFormMthods = useForm({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
  });
  console.log(useFormMthods.formState.errors);
  const onSubmit = (e: any) => console.log(e);
  return (
    <form onSubmit={useFormMthods.handleSubmit(onSubmit)}>
      <RenderWidgets singleStepWidgets={loginData} {...{ useFormMthods }} />
    </form>
  );
};

export default Login;
