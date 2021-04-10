import RenderWidgets from 'core/RenderWidgets';

const Login = ({ loginData }: any) => {
  return (
    <div>
      <RenderWidgets singleStepWidgets={loginData} />
    </div>
  );
};

export default Login;
