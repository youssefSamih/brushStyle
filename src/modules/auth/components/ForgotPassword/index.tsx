import RenderWidgets from 'core/RenderWidgets';
import { useForm } from 'react-hook-form';
import forgotPasswordSections from 'data/forgotPassword.json';
import customMessageError from 'data/customMessage.json';
import Notifications from 'modules/auth/components/Notifications';
import React from 'react';
import { useAuth } from 'lib/auth';

const codeEmailNotVerified = 'auth/email-not-verified';
const ForgotPassword = ({
  forgotPasswordData,
}: {
  forgotPasswordData: typeof forgotPasswordSections;
}) => {
  const auth = useAuth();
  const loading = auth?.loading;
  const apiMsg = auth?.msg;
  const emailNotVerifiedError =
    auth?.user.emailVerified === false
      ? customMessageError.filter(
          (errMsg: { code: string }) => errMsg.code === codeEmailNotVerified
        )[0]
      : {};
  const useFormMthods = useForm({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
  });
  const messages = {
    apiMsg: { ...apiMsg, ...emailNotVerifiedError },
  };
  const onSubmit = (e: any) => {
    const { email } = e[forgotPasswordData?.formKey];
    auth?.forgotPassword(email);
  };
  return (
    <form onSubmit={useFormMthods.handleSubmit(onSubmit)}>
      {messages && <Notifications {...{ messages }} />}
      <RenderWidgets
        dataWidgets={forgotPasswordData}
        {...{ useFormMthods, loading }}
      />
    </form>
  );
};

export default ForgotPassword;
