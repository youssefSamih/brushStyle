import RenderWidgets from 'core/RenderWidgets';
import { useForm } from 'react-hook-form';

const User = ({ userSignup }: any) => {
  const useFormMthods = useForm();
  const onSubmit = (e: any) => console.log(e);
  return (
    <form onSubmit={useFormMthods.handleSubmit(onSubmit)}>
      <RenderWidgets singleStepWidgets={userSignup} {...{ useFormMthods }} />
    </form>
  );
};

export default User;
