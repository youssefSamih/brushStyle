import RenderWidgets from 'core/RenderWidgets';

const User = ({ userSignup }: any) => {
  return (
    <div>
      <RenderWidgets singleStepWidgets={userSignup} />
    </div>
  );
};

export default User;
