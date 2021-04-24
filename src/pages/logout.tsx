import { useAuth } from 'lib/auth';
import { useRouter } from 'next/router';
import React from 'react';

const Logout = () => {
  const auth = useAuth();
  const router = useRouter();
  auth.signout();
  if (!auth.user) {
    router.replace('/login');
  }
  return <></>;
};

export default Logout;
